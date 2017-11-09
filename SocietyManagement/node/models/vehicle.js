var mongoose = require("mongoose");

var vehicleSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    type: {
        type: String
    },

    reg: {
        type: String
    },

    pic: {
        type: String
    },

    color: {
        type: String
    }
});

module.exports = mongoose.model("Vehicle", vehicleSchema);
