const express = require('express');
const router = express.Router();
console.log("Crafts route entrypoint!");

console.log("Crafts Route down here!")

router.get('/', (req, res) => {
    console.log("crafts got!")
    console.log('Requested URL:', req.originalUrl);
    res.json({ message: "Crafts route reached successfully!" });
})

module.exports = router
