const mongoose = require('mongoose')


const lauchesSchema = new mongoose.Schema({
  flightNumber: {
    type: Number,
    required: true,
    default:1,
  },
  launchDate: {
    type: Date,
    required: true,
  },
  mission: {
    type: String,
    required: true,
  },
  rocket: {
    type: String,
    required: true,
  },
  target: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Planet'
  },
  customer: {
    type: [String],
    default:['uit','nts'],
  },
  upcoming: {
    type: Boolean,
    required: true,
    default: true
  },
  success: {
    type: Boolean,
    required: true,
    default: true,
  }
})
module.exports = mongoose.model('Launch', lauchesSchema)


