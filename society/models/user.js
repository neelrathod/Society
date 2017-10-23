const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    first_name : {
        type: String,
        required : true
    },
    last_name : {
        type: String,
        required : true
    },
    email : {
        type: String,
        required : true
    },
    password : {
        type: String,
        required : true
    },
    birth : {
        type: String,
        required : true
    },
    purchase_date : {
        type: String,
        required : true
    },
    profile_pic : {
        type: String,
        required : true
    },
    flat_block : {
        type: String,
        required : true
    },
    flat_no : {
        type: Number,
        required : true
    },
    mobile : {
        type: Number,
        required : true
    }
});


const User = module.exports = mongoose.model("User", userSchema);
