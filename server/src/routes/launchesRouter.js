const express = require("express");
const router = express.Router();
const launchsController = require("../controllers/launchesController")


router.get('/', launchsController.getAllLaunches);
router.post('/', launchsController.addNewLaunches);
router.delete('/:id', launchsController.deleteLaunch);
module.exports = router;