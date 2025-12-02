// mongsql.js       18-11-2025   only this file

// install ->    npm install mongod           npm install mongoose 

// 1. establish conn with mongoose
// 2. create schema
// 3. create model
// 4. perform CRUD operations


// start mongosh in terminal
// code in mongosh 
// mongosh
// show dbs
// use mydatabase
// show collections 
// db.students.find({})


// import modules
const express = require('express')
const { MongoClient } = require('mongodb')
const mongoose = require("mongoose")
const app = express()
const PORT = 3000;


//establish the conn
mongoose.connect("mongodb://127.0.0.1:27017/mydatabase")
.then(() => console.log("mongodb connected"))
.catch((err) => console.log("mongo error", err))


//create a schema
const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    USN: {
        type: String,
        required: true,
        unique: true
    }
})

//create a model
const Student = mongoose.model('student', userSchema)
app.use(express.urlencoded({ extended: false }))      // in postman body -> x-www-form-urlencoded


// POST /api/users
app.post("/api/users", async (req, res) => {
    const body = req.body
    const result = await Student.create({
        Name: body.Name,
        USN: body.USN
    })
    console.log("result", result)
    return res.status(201).json({ msg: "success" })
});


// GET all students
app.get("/students", async (req, res) => {
    const allStudents = await Student.find({})
    const html = `<ul>${allStudents.map((student) => `<li>${student.Name} - ${student.USN}</li>`).join("")}</ul>`
    res.send(html)
});


// PATCH for update student by USN
app.patch("/students/:id", async (req, res) => {    // use auto generated _id
    const updateStudent = await Student.findByIdAndUpdate(req.params.id, { USN: "2CS1" }, { new: true })
    res.json(updateStudent)
});


// DELETE student by USN
app.delete("/students/:id", async (req, res) => {   // use auto generated _id
    const deleteStudent = await Student.findByIdAndDelete(req.params.id)
    res.json({ msg: "deleted", deleteStudent })
});                                                // can use as in POST method 


// server listen
app.listen(3000, () => console.log("Server Running"));