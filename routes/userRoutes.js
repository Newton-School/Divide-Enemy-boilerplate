const express = require("express");

const { canDivideFriends } = require("../controllers/userControllers");

const router = express.Router();

router.get("/canDivideFriends", canDivideFriends);

module.exports = router;