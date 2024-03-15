const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();

// GET /user/register
router.get("/register", controller.getRegister);

// POST /user/register
router.post("/register", controller.postRegister);

module.exports = router;
