const express = require('express');
const app = express();
var bodyParser = require("body-parser");
const mongoose = require('mongoose');
require('dotenv').config()

const { createCourse, getAllCourse } = require('./server/controllers/course');

//Set view engine to ejs
app.set("view engine", "ejs");
//Tell Express where we keep our index.ejs
app.set("views", __dirname + "/views");
//Use body-parser

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

const server = app.listen(7000, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Database connected');
    })
    .catch((error) => {
        console.log('Error connecting to database');
    });

app.get("/", (req, res) => {
    getAllCourse().then(all => {
        res.render("index", {
            title: 'ECOURSES',
            courses: all
        })
    })
});