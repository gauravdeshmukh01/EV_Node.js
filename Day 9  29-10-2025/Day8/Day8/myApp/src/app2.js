const express = require('express');
const { dirname } = require('path');
const app = express();
const path = require('path');
const port = 3025;

// app.get('/user/:username', (req,res) => {
//     res.send('<h1>Hello '+ req.params.username + ' </h1>')
// });


// http://localhost:3025/user?username=AAA
// app.get('/user', (req,res) => {
//     res.send('<h1>Hello '+ req.query.username + ' </h1>')
// });

app.get('/user', (req,res) => {
    console.log("you requested user.html")
    res.sendFile(path.join(__dirname + '/views/user.html'))
});


app.get('/requser', (req,res) => {
    res.json({username:req.query.username})
});

app.get('/', (req,res) => {
    
})

app.listen(3025, () => {
    console.log("server listening")
});




