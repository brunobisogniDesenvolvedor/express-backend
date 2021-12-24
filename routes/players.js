const express = require("express");
const req = require("express/lib/request");
const router = express.Router();
let players = require("../dommyDatabase"); 

router.get ("/list" , async (req, res) => {
try {
    res.status(200).json({
        data : players
    });
} catch (err) {
    res.status(400).json({
        message: "Some error occured",
        err
    });
}
});

module.exports = router; 