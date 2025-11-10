const express = require('express');
const router = express.Router();
console.log("AI handler entrypoint!")
const { GoogleGenAI } = require ("@google/genai");
const dotenv = require ("dotenv");

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
    //res.send({})
    // This is the prompt

    console.log("Raw body:", req.body);

    const prompt = `
      You are ReCRAFT AI.
      Generate 2-3 creative craft/Art/DIY ideas as a JSON object in this exact format:
      {
        "1": {
          "title": "...",
          "image": "https://example.com/image.jpg",
          "materials": ["...", "..."],
          "difficulty": "Easy | Intermediate | Hard",
          "time": "XX-XX minutes",
          "steps": ["Step 1...", "Step 2..."],
          "description": "...",
          "tips": "..."
        },
        "2": {...},
        "3": {...}
      }

      Use themes like: ${themes}.
      Maker's Skills: ${skills}.
      Materials available to the Maker: ${materials.join(", ")}.
      Crafts should be unique and detailed.
      Do not send in markdown format, or include commentary.
    `;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });
  console.log(response.text);
    const text = response.text;

    // Try to parse AI output as JSON
    
    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch (e) {
      console.error("Error parsing AI response:", e);
      return res.status(500).json({ error: "Failed to parse AI output" });
    }
   
    res.json({ craftsData: parsed });
    
  } catch (err) {
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
