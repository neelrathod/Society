var mongoose = require("mongoose");




//comSchema
var comSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    comment: {
        type: String
    },
    feedId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Feed"
    }


});




module.exports = mongoose.model("Com", comSchema);
