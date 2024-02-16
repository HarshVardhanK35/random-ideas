const mongoose = require("mongoose");

// create an instance of schema --- instantiating a new schema instance
const IdeaSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, "Please enter text field"]
  },
  tag:{
    type: String
  },
  username:{
    type: String
  },
  date:{
    type: Date,
    default: Date.now
  }
});

// export the model...
module.exports = mongoose.model("Idea", IdeaSchema)