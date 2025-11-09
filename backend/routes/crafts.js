const express = require('express');
const router = express.Router();
console.log("HElllllo");

console.log("before init ai")

router.get('/', (req, res) => {
    console.log("crafts got!")
})

module.exports = router
