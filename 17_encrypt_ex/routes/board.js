const express = require("express");
const controller = require("../controller/Cboard");
const router = express.Router();

router.get("/", controller.getBoard);

module.exports = router;
