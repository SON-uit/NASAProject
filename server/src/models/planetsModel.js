const mongoose = require("mongoose");
const planetsModel = new mongoose.Schema({
  keplerName: {
    type: String,
    required: true,
  },
});
const planets = mongoose.model("Planet", planetsModel);
module.exports = planets;