var express = require("express");
var router = express.Router();
var User = require("../models/user");
var Vehicle = require("../models/vehicle")
var jwt = require('jsonwebtoken');

var multer = require('multer');
var DIR = './uploads/';
var vehicleDir = './uploads/vehicle';
var upload = multer({ dest: DIR }).single('img');
var uploadvehicle = multer({ dest: vehicleDir }).single('vehicleimg')



//For handle Allow Origin access error
router.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Accept, Authorization accesstoken');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

////////////////////////////////////////////////////////////

//                 SignUp & LogIn Routes

////////////////////////////////////////////////////////////

//SignUP 
router.post("/signup", function (req, res) {

    var path = '';

    upload(req, res, function (err) {
        if (err) {
            console.log(err)
            res.json({ msg: "Error" })
        } else {
            if (req.file) {
                var mimetype = req.file.mimetype
                path = req.file.filename + "." + mimetype.substr(6, (mimetype.length - 1))
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
                    res.json({ msg: 'User Added Successfully', data: users }, 200);
                    console.log("User Added Successfully")
                }
            });
        }
    })

});


//Login
router.post("/login", function (req, res, next) {
    var email = req.body.email;
    var password = req.body.password;

    User.findOne({ email }, function (err, users) {
        if (err) {
            res.json({ msg: 'Failed to Login' }, 400);
        } else {
            if (users.email == email && users.password == password) {
                res.json({ msg: 'Login Successfully', data: users }, 200);
            } else {
                res.json({ msg: 'Failed to Login' }, 400);
            }
        }
    });
});



////////////////////////////////////////////////////////////

//                 Admin Routes

////////////////////////////////////////////////////////////

//Paid Users
router.post("/admin/paid", isLoggedIn, function (req, res, next) {
    var flat_block = req.body.flat_block;
    var month = req.body.month;

    var newData = { flat_block: flat_block, month: month }

    User.find({ "maintenance.isPaid": true, "flat_block": flat_block, "maintenance.month": month }, function (err, paidusers) {
        if (err) {
            console.log(err);
        } else {
            res.send({ data: paidusers })
        }
    })
});

//UnPaid Users
router.post("/admin", isLoggedIn, function (req, res, next) {
    var flat_block = req.body.flat_block;
    var month = req.body.month;

    var newData = { flat_block: flat_block, month: month }

    User.find({ "maintenance.isPaid": false, "flat_block": flat_block, "maintenance.month": month }, function (err, paidusers) {
        if (err) {
            console.log(err);
        } else {
            res.send({ data: paidusers })
        }
    })
});


////////////////////////////////////////////////////////////

//                 Vehicle Route

////////////////////////////////////////////////////////////


//List of Vehicles
router.get("/vehicles", isLoggedIn, function (req, res, next) {

    Vehicle.find({}, function (err, vehicles) {
        if (err) {
            console.log(err);
        } else {
            res.send(vehicles);
        }
    })
})


//Add vehicles
router.post("/vehicle", isLoggedIn, function (req, res, next) {

    var vpath = '';
    uploadvehicle(req, res, function (err) {
        if (err) {
            console.log(err)
            res.json({ msg: "Error" })
        } else {
            if (req.file) {
                var mimetype = req.file.mimetype
                vpath = req.file.filename + "." + mimetype.substr(6, (mimetype.length - 1))
            }
            var addvehicleForm = JSON.parse(req.body.addvehicleForm)

            var type = addvehicleForm.type;
            var reg = addvehicleForm.reg;
            var pic = vpath;
            var color = addvehicleForm.color;
            var userId = addvehicleForm.userId;
            var newVehicle = {
                type: type,
                reg: reg,
                pic: pic,
                color: color,
                userId: userId
            }

            Vehicle.create(newVehicle, function (err, vehicle) {
                if (err) {
                    res.json({ msg: "Failed to add User" }, 400)
                } else {
                    res.json({ msg: 'Vehicle Added Successfully' }, 200)

                }
            });
        }
    })


});







//My Vehicles
router.get("/vehicle/:id", isLoggedIn, function (req, res, next) {

    Vehicle.find({ "userId": req.params.id }, function (err, vehicle) {
        if (err) {
            res.json({ msg: "Errors in vehicles" }, 400)
        } else {
            res.send({ vehicle: vehicle });
        }
    })
})

//Edit My Vehicle
router.put("/vehicle/edit", isLoggedIn, function (req, res) {

    vehicleID = req.body._id
    if (!vehicleID) {
        res.json({ msg: "Error in vehicles update" }, 400)
    }
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
    // console.log(newVehicle)
    console.log(vehicleID)
    Vehicle.update({ _id: vehicleID }, newVehicle, function (err, foundvehicle) {
        if (err) {
            console.log(err);
            res.json({ msg: "Errors in vehicles" }, 400)
        }
        else {
            console.log(foundvehicle);
            res.send({ vehicle: foundvehicle });
        }
    })
});





//Delete My Vehicle
router.delete("/vehicle/:id", isLoggedIn, function (req, res, next) {
    Vehicle.remove({ _id: req.params.id }, function (err, result) {
        if (err) {
            res.json(err);
        } else {
            res.json(result).data
        }
    });
});


//Middleware for login or not

function isLoggedIn(req, res, next) {
    var accesstoken = req.headers.accesstoken;
    console.log(accesstoken)


    User.findOne({ emailToken: accesstoken }, function (err, data) {
        console.log(data);
        if (data === null || err) {
            res.status(401).send({ body: "You are not Authenticated" });
        } else {
            req.body.userId = data._id;
            next();
        }
    })
}





module.exports = router;