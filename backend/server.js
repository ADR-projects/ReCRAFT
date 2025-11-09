const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const generateRoutes = require("./routes/generate");
const craftsRoutes = require("./routes/crafts");

dotenv.config();
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/generate", generateRoutes);
app.use("/api/crafts", craftsRoutes);

app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
