const express = require('express');
const { dirname } = require('path');
const app = express();
const path = require('path');
const port = 3025;

app.use(express.json())

app.post('/', (req,res) => {
    const {name} = req.body
    res.send(`Welcome ${name}`)
})

app.listen('3025', () => {
    console.log('server running')
})