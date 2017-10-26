var express = require("express");
var router = express.Router();
var User = require("../models/user");
var Vehicle = require("../models/vehicle")
var jwt = require('jsonwebtoken');




//Admin Routes
router.get("/admin", function (req, res) {
    //Get all users which Don't paid maintenance
    User.find({"maintenance.isPaid" : false }, function (err, unpaidusers) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(unpaidusers);
        }
    });


});

router.get("/admin/paid", function (req, res) {
    //Get all users which paid maintenance
    var flat_block = req.body.flat_block;
    var month = req.body.month;
    
    User.find({"maintenance.isPaid" : true , "flat_block" : flat_block, "maintenance.month" : month }, function (err, paidusers) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(paidusers);
        }
    });


});

//Vehicle Route
router.post("/vehicle", function(req, res, next){
    var type = req.body.type;
    var reg = req.body.reg;
    var pic = req.body.pic;
    var color = req.body.color;

    var newVehicle = {
        type : type,
        reg : reg,
        pic : pic,
        color : color
    }

    Vehicle.create(newVehicle, function(err, vehicle){
        if(err){
            res.json({ msg : "Failed to add User"}, 400)
        }else{
            res.json({ msg: 'Vehicle Added Successfully' }, 200)
            
        }
    });
});


router.get("/vehicles", function(req, res, next){
    Vehicle.find({}, function(err, vehicles){
        if(err){
            console.log(err);
        }else{
            res.send(vehicles);
        }
    })
})

// router.get("/vehicle/:id", function(req, res, next){
//     Vehicle.findById(req.params.id)
// })
//SignUp Route
router.post("/signup", function (req, res, next) {

    var first_name = req.body.first_name;
    var last_name = req.body.last_name;
    var email = req.body.email;
    var password = req.body.password;
    var birth = req.body.birth;
    var purchase_date = req.body.purchase_date;
    var profile_pic = req.body.profile_pic;
    var flat_block = req.body.flat_block;
    var flat_no = req.body.flat_no;
    var mobile = req.body.mobile;
    var token = jwt.sign(mobile, 'neel');

    var newUser = {
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
        birth: birth,
        purchase_date: purchase_date,
        profile_pic: profile_pic,
        flat_block: flat_block,
        flat_no: flat_no,
        mobile: mobile,
        emailToken: token,
        maintenance: [{
            "isPaid": 0,
            "month": 8,
            "year": 2017,
            "pay": 100
        }]
    }

    User.create(newUser, function (err, users) {
        console.log(err, users)
        if (err) {
            res.json({ msg: 'Failed to add User' }, 400);

        } else {
            res.json({ msg: 'User Added Successfully' }, 200);
        }
    });
});

router.post("/login", function (req, res, next) {
    var email = req.body.email;
    var password = req.body.password;

    User.findOne({ email }, function (err, users) {
        if (err) {
            res.json({ msg: 'Failed to Login' }, 400);
        } else {
            if (users.email == email && users.password == password) {
                res.json({ msg: 'Login Successfully' }, 200);
            } else {
                res.json({ msg: 'Failed to Login' }, 400);
            }
        }
    });
});




module.exports = router;