const express = require('express');
const path = require('path');
const app = express();
app.get('/', (req, res) => {
    res.send("Welcome to the Express session");
});

app.get('/home', (req, res) => {
    res.send("Good Evening Everyone");
});

app.get('/index2.html', (req, res) => {
    res.redirect(301, 'index.html');
});

app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => {
    console.log("Express listening");
});
