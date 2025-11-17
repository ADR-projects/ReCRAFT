const express = require('express');
const router = express.Router();
console.log("AI handler entrypoint!")
const { GoogleGenAI } = require("@google/genai");
const dotenv = require("dotenv");
const axios = require("axios");

dotenv.config(); //load env var

console.log("before init ai")

const ai = new GoogleGenAI({
  apiKey: process.env.API_KEY,
});

console.log("Get the ai up and runnin'!")

router.get('/', (req, res) => {
  console.log("gen got!")
})

router.post("/", async (req, res) => {
  try {
    const { skills, themes, wantToTry, materials } = req.body;
    console.log("Post section")

    // This is the prompt

    console.log("Raw body:", req.body);

    const prompt = `
      You are CraftSpark-AI.
      Generate 4-8 creative craft/Art/DIY ideas as a CLEAN JSON object in this exact format:
      {
        "1": {
          "title": "...",
          "image": "...",
        },
        "2": {...},
        "3": {...}
      }

      Use themes like: ${themes}.
      Maker's Skills: ${skills}.
      Materials available to the Maker: ${materials.join(", ")}.
      Craft title should be, maximum, around 5 words long.
      Let the image field contain a keyword related to the craft, eg. 'yarn' or 'electronics' or 'origami'.
      Do NOT send in markdown format, or include commentary.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    console.log(response.text);
    const text = response.text;

    // Try to parse AI output as JSON
    let cleanText = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();
    let parsed;
    try {
      parsed = JSON.parse(cleanText);
    } catch (e) {
      console.error("Error parsing AI response:", e);
      return res.status(500).json({ error: "Failed to parse AI output" });
    }

    const fallbackImageURL = "https://images.pexels.com/photos/4219219/pexels-photo-4219219.jpeg";

    async function getPexelsImage(query) {
      try {
        const res = await axios.get(process.env.PEXELS_URL, {
          params: { query, per_page: 1 },
          headers: {
            Authorization: process.env.PEXELS_API_KEY
          }
        });

        if (res.data.photos && res.data.photos.length > 0) {
          return res.data.photos[0].src.medium;
        }

        return fallbackImageURL; // fallback
      } catch (err) {
        console.error("Pexels fetch error:", err);
        return "https://via.placeholder.com/600x400?text=Error";
      }
    }


    for (const key of Object.keys(parsed)) {
      const craft = parsed[key];

      const keyword = craft.image || "DIY craft";
      // const keyword = "art"; // test
      const imageUrl = await getPexelsImage(keyword);

      craft.image = imageUrl;
    }


    // IMPORTANT:  HERE IS WHERE YOU PASS THE PARSED JSON 
    res.json({ craftsData: parsed });

  } catch (err) {
    if (err.message.includes("503")) {
      return res.status(503).json({
        error: "AI service is busy — please try again shortly!",
      });
    }
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });

  }
});



/**async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Explain how AI works in a few words",
  });
  console.log(response.text);
}

 main(); */

module.exports = router
