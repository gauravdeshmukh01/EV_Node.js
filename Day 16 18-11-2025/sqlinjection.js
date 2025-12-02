const express=require('express')
const bodyparser=require('body-parser')
const mysql=require('mysql2/promise')  // FIXED
const app=express()

app.use(bodyparser.urlencoded({extended:true}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'root',
    database:'node'
});

// method 1

// app.post('/login',async(req,res)=>{
//     const {id,name,branch}=req.body
//     try{
//         const [rows] = await pool.execute(
//             `SELECT * FROM student WHERE id="${id}" AND name="${name}" AND branch="${branch}"`
//         )

//         if(rows.length>0){
//             res.send("sql login successful")
//         }
//         else{
//             res.send("sql login failed")
//         }
//     }catch(err){
//         console.log(err)
//         res.send("error occurred")
//     }
// })

// app.listen(3080,()=>console.log("server Listening"))



//method 2 using prameterized query

// app.post('/login', async(req,res)=>{
//     const {id,name,branch}=req.body
//     try{
//         const [rows]=await pool.execute(`SELECT * FROM student WHERE id=? AND name=? AND branch=?`,[id,name,branch])
//         if(rows.length>0){
//             res.send("sql login successfull")
//         }
//         else{
//             res.send("sql login failed")
//         }
//     }catch(err){
//         res.send(500)
//     }
// })
// app.listen(3080,()=>console.log("server Listening"))