const express = require('express');
const router = express.Router();
console.log("AI handler entrypoint!")
const { GoogleGenAI } = require("@google/genai");
const dotenv = require("dotenv");

dotenv.config(); //load env var

console.log("before init ai")

const ai = new GoogleGenAI({
  apiKey: process.env.API_KEY,
});

console.log("Get the ai up and runnin'!")

router.get('/', (req, res) => {
  console.log("gen got!")
})
// ollama api
router.post("/", async (req, res) => {
  try {
    const { skills, themes, wantToTry, materials } = req.body;
    console.log("Post section")
    //res.send({})
    // This is the prompt

    console.log("Raw body:", req.body);

    const prompt = `
      You are CraftSpark-AI.
      Generate 2-3 creative craft/Art/DIY ideas as a JSON object in this exact format:
      {
        "1": {
          "title": "...",
          "image": "https://example.com/image.jpg",
          "description": "...",
        },
        "2": {...},
        "3": {...}
      }

      Use themes like: ${themes}.
      Maker's Skills: ${skills}.
      Materials available to the Maker: ${materials.join(", ")}.
      Crafts should be unique and detailed.
      Do NOT send in markdown format, or include commentary.
      KEEP the description brief, like a single-sentence summary.
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
     
    const customImageUrl = "https://images.pexels.com/photos/4219219/pexels-photo-4219219.jpeg"; 
    Object.keys(parsed).forEach((key) => {
      parsed[key].image = customImageUrl;
    });

    // res.json({ craftsData: parsed });
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
