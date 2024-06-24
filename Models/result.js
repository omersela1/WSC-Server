const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  player: {
    type: String,
    required: true,
  },
  time: {
    type: Number, // Float number for time
    required: true,
    validate: {
      validator: function(value) {
        return value > 0;
      }
    }
  },
  steps: {
    type: Number, // Integer for steps
    required: true,
    validate: {
      validator: function(value) {
        return value > 0;
      }
    }
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Result = mongoose.model("Result", resultSchema);

module.exports = Result;
