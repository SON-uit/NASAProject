
const planetsModel = require("../models/planetsModel");
module.exports.getAllPlanets = async function (req, res) {
  const planets = await planetsModel.find();
  return res.status(200).json(planets);
};
