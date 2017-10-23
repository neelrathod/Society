var express = require("express"),
    router = express.Router(),
    User = require("../models/user")



//Retrieving Data
router.get("/users", function (req, res, next) {
    User.find(function(err, signup){
        res.json(signup);
    });
});

//Add Data
router.post("/user", function(req, res, next){
   
    let newUser = new User({
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            email : req.body.email,
            password : req.body.password,
            birth : req.body.birth,
            purchase_date : req.body.purchase_date,
            profile_pic : req.body.profile_pic,
            flat_block : req.body.flat_block,
            flat_no : req.body.falt_no,
            mobile : req.body.mobile
    });

    newUser.save(function(err, user){
        if(err){
              res.json({ msg : 'Failed to add Contact'})
        }else{
             res.json({ msg: 'Contact Added Successfully'})
        }
    });
});

//Update Data

//Delete Data

module.exports = router;