const express = require("express");
const controller = require("../controller/Cvisitor");
const router = express.Router();

router.get("/", controller.main); // GET /
router.get("/visitors", controller.getVisitors); // GET /visitor

router.get("/visitor/:id", controller.getVisitor);

router.post("/visitor", controller.postVisitor);
router.delete("/visitor", controller.deleteVisitor);
router.patch("/visitor", controller.patchVisitor);

module.exports = router;
