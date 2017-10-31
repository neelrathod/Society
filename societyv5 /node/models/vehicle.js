var mongoose = require("mongoose");

var vehicleSchema = new mongoose.Schema({
    userId: {
        type: String
    },
    type: {
        type: String
    },

    reg: {
        type: Number
    },

    pic: {
        type: String
    },

    color: {
        type: String
    }
});

module.exports = mongoose.model("Vehicle", vehicleSchema);
