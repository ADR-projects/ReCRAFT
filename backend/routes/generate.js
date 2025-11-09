const express = require('express');
const router = express.Router();
console.log("HElllllo")
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

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Explain how AI works in a few words",
  });
  console.log(response.text);
}

 main();

 module.exports = router
