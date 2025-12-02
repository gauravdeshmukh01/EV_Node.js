/*1. install mysql
2. established a connection with db using createConnection() and connect()
3. conn.query()
4. transaction---beginTransaction()
5. commit() */

const express = require('express');
const app = express();
app.use(express.json());
const mysql=require('mysql2')
const conn=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'node'
})
conn.connect((err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("Database Connected")
    }
})

// GET all students
app.get("/dbconn/students",(req,res)=>{
    conn.query("select * from student",(err,rows)=>{
        if(err)console.log(err)
        res.send(rows)
    })
})

// GET student by ID
app.get("/dbconn/students/:id",(req,res)=>{
    const id=req.params.id
    conn.query("select * from student where id=?",[id],(err,rows)=>{
        if(err)console.log("error retrieving data")
        res.send(rows)
    })
})

// POST new student
app.post("/dbconn/students",(req,res)=>{
    const body=req.body
    conn.beginTransaction((err)=>{
        if(err)console.log("error in querying")
    })
    conn.query("insert into student values(?,?,?)",Object.values(body),(err)=>{
        if(err)console.log(err)
    })

    conn.commit((err)=>{
    if(err)console.log(err)
    res.send("Student data inserted")
    })
    console.log(body);
})

// PUT update student
app.put("/dbconn/students",(req,res)=>{
    const body=req.body
    conn.query("update student set branch=? where id=?",Object.values(body),(err)=>{
        if(err)console.log(err)
        res.send("user data updated")
    })
    conn.commit((err)=>{
        if(err)console.log(err)
        console.log("user updated")
    })
})

// PATCH update student name by ID
app.patch("/dbconn/students/:id",(req,res)=>{
    const id=req.params.id
    const name=req.body.name
    conn.query("update student set name=? where id=?",[name,id],(err)=>{
        if(err)console.log(err)
        res.send("User name updated")
    })  
})

// DELETE student by ID
app.delete("/dbconn/students/:id",(req,res)=>{
    const id=req.params.id
    conn.query("delete from student where id=?",[id],(err)=>{
        if(err)console.log(err)
        res.send("User Deleted")
    })
})

// method 2
// app.delete("/dbconn/students/:id",(req,res)=>{
//     const id=req.params.id
//     conn.beginTransaction((err)=>{  
//         if(err)console.log("error in querying")
//     }
//     )
//     conn.query("delete from student where id=?",[id],(err)=>{
//         if(err)console.log(err)
//     })

//     conn.commit((err)=>{
//     if(err)console.log(err)
//     res.send("Student data deleted")
//     })
// })


//server listening
app.listen(3300,()=>{ console.log("Server is running on port 3300")});


