var mongoose = require("mongoose");




//FeedSchema
var feedSchema = new mongoose.Schema({
  userId: {
     type: String
  },
    feed : {
      type: String
  },
  feedImg: {
      type: String
  }
});




module.exports = mongoose.model("Feed", feedSchema);
