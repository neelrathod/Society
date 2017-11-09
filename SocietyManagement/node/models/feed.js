var mongoose = require("mongoose");




//FeedSchema
var feedSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  feed: {
    type: String
  },
  feedImg: {
    type: String
  },
  comment: [{
    comment: {
      type: String
    },
    userId:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    feedId:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Feed"
    }


  }]
});




module.exports = mongoose.model("Feed", feedSchema);
