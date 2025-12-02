const express = require('express');
const { dirname } = require('path');
const app = express();
const path = require('path');
const port = 3025;

app.get('/home', (req, res) => {
    console.log("you requested home.html")
    res.sendFile(path.join(__dirname + '/views/home.html'))
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/about.html'))
});

app.get('/user', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/user.html'))
});

app.get('/requser', (req,res) => {
    res.json({username:req.query.username, USN:req.query.usn})
})

app.listen(3025, () => {
    console.log("server running")
})




