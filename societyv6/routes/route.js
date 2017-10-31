var express = require("express");
var router = express.Router();
var User = require("../models/user");
var Vehicle = require("../models/vehicle")
var jwt = require('jsonwebtoken');

var multer = require('multer');
var DIR = './uploads/';
var upload = multer({dest: DIR}).single('img');







////////////////////////////////////////////////////////////

//                 Admin Routes

////////////////////////////////////////////////////////////
router.post("/admin/paid", function (req, res, next) {
    var flat_block = req.body.flat_block;
    var month = req.body.month;

    var newData = { flat_block: flat_block, month: month }

    User.find({ "maintenance.isPaid": true, "flat_block": flat_block, "maintenance.month": month }, function (err, paidusers) {
        if (err) {
            console.log(err);
        } else {
            res.send(paidusers)
        }
    })
});


router.post("/admin", function (req, res, next) {
    var flat_block = req.body.flat_block;
    var month = req.body.month;

    var newData = { flat_block: flat_block, month: month }

    User.find({ "maintenance.isPaid": false, "flat_block": flat_block, "maintenance.month": month }, function (err, paidusers) {
        if (err) {
            console.log(err);
        } else {
            res.send(paidusers)
        }
    })
});

////////////////////////////////////////////////////////////

//                 Vehicle Route

////////////////////////////////////////////////////////////

router.post("/vehicle", function (req, res, next) {
    var type = req.body.type;
    var reg = req.body.reg;
    var pic = req.body.pic;
    var color = req.body.color;

    var newVehicle = {
        type: type,
        reg: reg,
        pic: pic,
        color: color
    }

    Vehicle.create(newVehicle, function (err, vehicle) {
        if (err) {
            res.json({ msg: "Failed to add User" }, 400)
        } else {
            res.json({ msg: 'Vehicle Added Successfully' }, 200)

        }
    });
});


router.get("/vehicles", function (req, res, next) {
    Vehicle.find({}, function (err, vehicles) {
        if (err) {
            console.log(err);
        } else {
            res.send(vehicles);
        }
    })
})

router.get("/vehicle/:id", function (req, res, next) {
    Vehicle.findById(req.params.id, function(err, vehicle){
        if(err){
            res.json({msg : "Errors in in vehicles"}, 400)
        }else{
            res.send({ vehicle : vehicle});
        }
    })
})

////////////////////////////////////////////////////////////

//                 SignUp & LogIn Routes

////////////////////////////////////////////////////////////


router.post("/signup", function (req, res) {

      var path='';
      
      upload(req, res, function(err){
          if(err){
              console.log(err)
              res.json({msg : "Error"})
          }else {
                if(req.file){
                    var mimetype = req.file.mimetype
                    path = req.file.filename + "." +mimetype
                }
                var forms = JSON.parse(req.body.forms);

                var first_name = forms.first_name;
                var last_name = forms.last_name;
                var email = forms.email;
                var password = forms.password;
                var birth = forms.birth;
                var purchase_date = forms.purchase_date;
                var profile_pic = path;
                var flat_block = forms.flat_block;
                var flat_no = forms.flat_no;
                var mobile = forms.mobile;
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
                console.log(forms)
                
                User.create(newUser, function (err, users) {
                    if (err) {
                        res.json({ msg: 'Failed to add User' }, 400);
                        console.log("'Failed to add User'")
                    } else {
                        res.json({ msg: 'User Added Successfully' }, 200);
                        console.log("User Added Successfully")
                    }
                });
            }
        })        

});

router.post("/login", function (req, res, next) {
    var email = req.body.email;
    var password = req.body.password;

    User.findOne({ email }, function (err, users) {
        if (err) {
            res.json({ msg: 'Failed to Login' }, 400);
        } else {
            if (users.email == email && users.password == password) {
                res.json({ msg: 'Login Successfully',data: users }, 200);
            } else {
                res.json({ msg: 'Failed to Login' }, 400);
            }
        }
    });
});


// router.post('/uploads', function (req, res, next) {
//     var path = '';
//     upload(req, res, function (err) {
//        if (err) {
//          // An error occurred when uploading
//          console.log(err);
//          return res.json({ msg :"an Error occured"}, 400);
//        }  
//        path =  req.file.name ;
//         // res.json({ msg: "Upload Completed for "+ path + "." + req.file.mimetype }, 200);
//        res.send({body:JSON.parse(req.body.formValue)})
        
    
//  });     
// })


module.exports = router;