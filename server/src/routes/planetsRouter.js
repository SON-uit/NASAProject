const express = require("express");
const router = express.Router();
const planetsController = require("../controllers/planetsController")


router.get('/', planetsController.getAllPlanets);

module.exports = router;