// nosql injection - nosql databases
// $ne, $gt, $or
// {username: {"ne": null}}


const express = require('express')
const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/mydatabase")
.then(() => console.log("mongodb connected"))
.catch((err) => console.log("mongo error", err))

const userlogin = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String
    }
})

const User = mongoose.model('userlogin', userlogin)
app.use(express.urlencoded({ extended: false }))


// app.post('/login', async (req, res) => {
//     const { username, password } = req.body
//     const user = await User.findOne({ username, password })
//     if (user) return res.json(user)
//     res.status(401).send('unauthorized')
// });


// above code is risky -> to avoid risk we use parameterized queries

app.post('/login', async (req, res) => {
    const { username, password } = req.body; // Assuming input processing is done
    
    // 1. Find user ONLY by username
    const user = await User.findOne({ username: username }); 
    
    // 2. Check if user exists AND if passwords match (use bcrypt.compare() in real app)
    if (user && user.password === password) { // Simple comparison for testing
        return res.json(user); // 200 OK
    } else {
        res.status(401).send('unauthorized'); // 401 Unauthorized
    }
});


app.listen(3000, () => {
    console.log("server running on port 3000")  
});