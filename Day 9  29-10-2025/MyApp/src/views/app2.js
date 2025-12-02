
// const express = require('express')
// const app = express()
// const path = require('path')
// const port = 3025

// // The commented-out code shows how to handle Route Parameters (e.g., /user/AAA)
// // app.get('/user/:username', (req,res)=>{res.send('<h1>Hello '+req.params.username+'</h1>')})

// // Example URL for the line below: http://localhost:3025/user?username=AAA

// // This route handles Query Parameters (e.g., ?username=value)
// app.get('/user', (req, res) => {
//     res.send('<h1>Hello ' + req.query.username + '</h1>')
// })

// app.listen(port, () => console.log("server Lsitening"))







const express = require('express')
const app = express()
const path = require('path')
const port = 3020

app.get('/user', (req, res) => {
    console.log('You requested home.html')
    res.sendFile(path.join(__dirname + '/views/user.html'))
})

app.get('/user', (req, res) => {
    res.json({
        username: req.query.username
    })
})

app.listen(3020, () => console.log("server Lsitening"))