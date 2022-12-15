const session = require('express-session')
const express = require("express");
const app = express()
const mongojs = require('mongojs')
const db = mongojs('mongodb://127.0.0.1:27017/test', ['users'])

const PORT = 4000;
const indexRoute = require("./routes/index.js")
// use static files
app.use(express.static("public"));

// parsing the incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use ejs views
app.set("view engine", "ejs");
app.set("views", "views");

const sess = {
    secret: 'ausazko hitz multzoa',
    cookie: {}
}
app.use(session(sess))
app.use('/', indexRoute)

//username and password
const myusername = 'user1'
const mypassword = 'mypassword'

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);})
