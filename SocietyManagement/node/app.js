var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    path = require('path'),
    multer = require('multer'),
    DIR = './uploads/',
    upload = multer({ dest: DIR }).single('photo')




var app = express();

//Port No.
const port = 4000 || process.nev.PORT;

//MongoDb Connection
mongoose.connect("mongodb://localhost/my_society");

//Routes
const routes = require('./routes/route');



//On Connection
mongoose.connection.on("connected", function (req, res) {
    console.log("Connected to Database @27017")
});

mongoose.connection.on("error", function (err) {
    if (err) {
        console.log("Error in database connection " + err)
    }

});

//Adding Middle-ware - cors => It's used for client side port 
app.use(cors());

//body-parser
app.use(bodyParser.json());

//Routes 
app.use("/api", routes);

app.get("/", (req, res) => {
    res.send("Connected")
});


app.listen(port, process.env.IP || function () {
    console.log("Server is started at port : " + port)
});