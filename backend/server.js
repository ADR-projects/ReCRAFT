const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const generateRoutes = require("./routes/generate.js");
const craftsRoutes = require("./routes/crafts.js");

dotenv.config();
const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server root working!');
});

app.use("/generate", generateRoutes);
app.use("/crafts", craftsRoutes);

app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
