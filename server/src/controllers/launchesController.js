const { response } = require("express");
const launchesModel = require("../models/launchesModel");
const planetsModel = require("../models/planetsModel")
module.exports.getAllLaunches = async function(req, res ) {
  const allLauches = await launchesModel.find();
  return res.status(200).json(allLauches);
}
module.exports.addNewLaunches = async function(req, res) {
  const launch = req.body;
  if (!launch.mission ||!launch.launchDate) {
    return res.status(404).json({ message: "Invalid Data"});
    //throw new Error(404, "Invalid launch");
  }
  const planet = await planetsModel.findOne({keplerName: launch.target});
  console.log(planet);
  if (!planet) {
    return res.send.status(404).json({ message: "Erorr"});
  }
  launch.launchDate = new Date(launch.launchDate)
  const newLaunch = await new launchesModel({
    mission: launch.mission,
    rocket: launch.rocket,
    launchDate: launch.launchDate,
    target:planet._id,
  });
  await newLaunch.save();
  return res.status(201).json(newLaunch); 
}
module.exports.deleteLaunch = function(req, res) {
  const flightNumber = req.params.id * 1;
  
  return res.status(200).json(aborted);
}
