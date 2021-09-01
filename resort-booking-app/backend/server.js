var express = require("express");
var bodyparser = require("body-parser");
var mongoose = require("mongoose");
var app = express();

mongoose.connect("mongodb://localhost:27017/resorts");
var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
    console.log("connect to database");
});

app.use(bodyparser.json());
app.use(express.static("public"));
app.use(
    bodyparser.urlencoded({
        extended: true,
    })
);
app.get("/", function (req, res) {
    res.set({ "Allow-access-Allow-Orgin": "*" });
    res.send("hello ");
});

app.post("/registration", function (req, res) {
    var username = req.body.username;
    var email = req.body.email;
    var number = req.body.number;
    var password = req.body.password;
    var cpassword = req.body.cpassword;

    var userData = {
        username: username,
        email: email,
        number: number,
        password: password,
        cpassword: cpassword,
    };
    db.collection("register").insertOne(userData, (err, collection) => {
        if (err) {
            throw err;
        }
        res.send({ message: "Registration suceessfull" });
    });
});

//Booking Form
app.post("/BookingForm", function (req, res) {
    var name = req.body.name;
    var numberOfPeople = req.body.nopeople;
    var uemail = req.body.email;
    var gender = req.body.gender;
    var checkin = req.body.chIn;
    var checkout = req.body.chOut;
    var number = req.body.number;

    var userData = {
        name: name,
        email: uemail,
        numberofpeople: numberOfPeople,
        gender: gender,
        checkin: checkin,
        checkout: checkout,
        number: number,
    };
    db.collection("booking").insertOne(userData, (err, collection) => {
        if (err) {
            throw err;
        }
        res.send({ message: "Booking sucessfull" });
    });
});

var server = app.listen(8081, function () {
    console.log("server ...");
    console.log(server.address().port);
});
