var mongoose = require("mongoose");




//UserSchema
var userSchema = new mongoose.Schema({
    first_name : {
        type: String
        
    },
    last_name : {
        type: String
        
    },
    email : {
        type: String
        
    },
    password : {
        type: String
        
    },
    birth : {
        type: String
        
    },
    purchase_date : {
        type: String
        
    },
    profile_pic : {
        type: String
        
    },
    flat_block : {
        type: String
        
    },
    flat_no : {
        type: Number
        
    },
    mobile : {
        type: Number
        
    },
    adminAccess : {
        type : Number,
        default : 0
    },
    emailToken :{
        type : String
    },
    maintenance : [{
            isPaid : {
                type : Boolean
            },
            month: {
                type : Number
            },
            year: {
                type : Number
            },
            pay : {
                type : Number
            }
        }]
});




module.exports = mongoose.model("User", userSchema);
