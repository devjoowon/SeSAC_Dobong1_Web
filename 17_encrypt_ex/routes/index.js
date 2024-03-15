const express = require("express");
const controller = require("../controller/Cmain");
const router = express.Router();

router.get("/", controller.main);
router.get("/login", controller.getlogin);

module.exports = router;
