var express = require("express");
var router = express.Router();
var User = require("../models/user");
var jwt = require('jsonwebtoken');



//Retrieving Data
router.post("/login", function (req, res, next) {
   var email = req.body.email;
   var password = req.body.password;
    
   User.findOne({email},function(err, users){
        if(err){
            res.json({ msg : 'Failed to Login'}, 400 );
        }else{
            if(users.email == email && users.password == password){
                res.json({ msg : 'Login Successfully'}, 200 );
            }else{
                res.json({ msg : 'Failed to Login'}, 400 );
            }
        }
    });
});


router.get("/admin", function (req, res) {
    //Get all campgrounds from DB
    User.find({}, function (err, allusers) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(allusers);
        }
    });


});

//Add Data
router.post("/signup", function(req, res, next){

           var first_name    = req.body.first_name;
           var last_name     = req.body.last_name;
           var email         = req.body.email;
           var password      = req.body.password;
           var birth         = req.body.birth;
           var purchase_date = req.body.purchase_date;
           var profile_pic   = req.body.profile_pic;
           var flat_block    = req.body.flat_block;
           var flat_no       = req.body.flat_no;
           var mobile        = req.body.mobile;
           var token         = jwt.sign(mobile, 'neel');

           var newUser= { first_name: first_name, 
            last_name: last_name, 
            email: email, 
            password: password, 
            birth: birth, 
            purchase_date : purchase_date, 
            profile_pic: profile_pic,
            flat_block: flat_block,
            flat_no: flat_no,
            mobile: mobile,
            emailToken : token }

    User.create(newUser,function(err, users){
        console.log(users, err)
        if(err){
              res.json({ msg : 'Failed to add User'}, 400 );

        }else{
             res.json({ msg: 'User Added Successfully'}, 200);
        }
    });
});


module.exports = router;