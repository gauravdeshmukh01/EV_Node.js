// const express=require('express')
// const app=express()
// const path=require('path')
// const port=3025

// app.get('/home', (req,res)=>{
//     console.log('You requested home.html')
//     res.sendFile(path.join(__dirname+'/views/home.html'))
// })

// app.get('/about', (req,res)=>{res.send("This is About ExpressJs session page")})
// app.listen(3025, ()=>console.log("server running"))





const express=require('express')
const app=express()
const path=require('path')
const port=3025

app.get('/home', (req,res)=>{
    console.log('You requested home.html')
    res.sendFile(path.join(__dirname+'/views/home.html'))
})

app.get('/user', (req,res)=>{
    console.log('You requested user.html')
    res.sendFile(path.join(__dirname+'/views/user.html'))
})

app.get('/resuser', (req,res)=>{
    res.json({username:req.query.username, USN:req.query.usn})
})

app.get('/about', (req,res)=>{res.send("This is About ExpressJs session page")})

app.listen(3025, ()=>console.log("server running"))