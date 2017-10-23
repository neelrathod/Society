var express = require("express"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    cors = require("cors"),
    path = require("path")

var app = express();

//Port No.
const port = 3000;

//Routes
const routes = require('./routes/route');

//MongoDb Connection
mongoose.connect("mongodb://localhost:27017/society");

//On Connection
mongoose.connection.on("connected", function (req, res) {
    console.log("Connected to Database @27017")
});

mongoose.connection.on("error", function (err) {
    if (err) {
        console.log("Error inn database connection " + err)
    }

});

//Adding Middle-ware - cors => It's used for client side port 
app.use(cors());

//body-parser
app.use(bodyParser.json());

//Routes 
app.use("/api", routes);

app.get("/", function (req, res) {
    res.send("Connected")
});


app.listen(port, function () {
    console.log("Server is started on port : " + port);
});