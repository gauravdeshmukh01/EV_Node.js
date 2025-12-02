// install following package before using this code:
// npm init -y
// npm install express
// npm install jsonwebtoken
// npm install dotenv
// npm install body-parser

const express = require('express');
const jwt = require('jsonwebtoken');
const bodyparser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyparser.json());

const users = [{ id: 1, username: 'admin', password: 'admin123' }];

app.post('/login', (req, res) => {
    const {username, password} = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if(!user){
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({id: user.id, username: user.username}, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
});

app.get('/profile', (req,res) => {
    const authHeader = req.headers.authorization;
    if(!authHeader){
        return res.status(401).json({ message: 'No token provided' });
    }
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if(err){
            return res.status(403).json({message: 'Invalid token or invalid secret_key'});
        }
        res.json({ message: 'Welcome to your profile', user: decoded });
    })
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});


// go to postman 
// for login use POST method http://localhost:3000/login
// body -> raw -> JSON
// {
//     "username": "admin",
//     "password": "admin123"
// }
// it will return token
// in three parts separated by dot (.)
// first part is header, second is payload, third is signature

// for profile use GET method http://localhost:3000/profile
// in headers use Authorization as key and Bearer <token> as value
// paste entire token received from login
// it will return profile data if token is valid