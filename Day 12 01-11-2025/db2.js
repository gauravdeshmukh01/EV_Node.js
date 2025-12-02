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

app.get("/dbconn/employees",(req,res)=>{
    conn.query("select * from employee",(err,rows)=>{
        if(err)console.log(err)
        res.send(rows)
    })
})

app.get("/dbconn/employees/:id",(req,res)=>{
    const id=req.params.id
    conn.query("select * from employee where id=?",[id],(err,rows)=>{
        if(err)console.log("error retrieving data")
        res.send(rows)
    })
})

app.post("/dbconn/employees",(req,res)=>{
    const body=req.body
    conn.beginTransaction((err)=>{
        if(err){
            console.log("error in querying");
            return res.status(500).send("Error starting transaction");
        }
    })
    conn.query("insert into employee values(?,?,?,?,?)",Object.values(body),(err)=>{
        if(err){
            console.log(err);
            conn.rollback(() => {
                res.status(500).send("Error inserting employee data: Rollback executed.");
            });
            return;
        }

        conn.commit((err)=>{
            if(err){
                console.log(err)
                conn.rollback(() => {
                    res.status(500).send("Error committing transaction: Rollback executed.");
                });
                return;
            }
            res.send("Employee data inserted")
        })
    })
    console.log(body);
})

app.put("/dbconn/employees",(req,res)=>{
    const { id, designation, salary } = req.body;

    conn.beginTransaction(err => {
        if (err) {
            console.error("Error starting transaction:", err);
            return res.status(500).send("Transaction failed.");
        }

        conn.query("UPDATE employee SET designation=?, salary=? WHERE id=?", 
            [designation, salary, id], 
            (err, result) => {
                if (err) {
                    console.error("Error in update query:", err);
                    return conn.rollback(() => {
                        res.status(500).send("Update failed. Rollback executed.");
                    });
                }
                
                conn.commit(commitErr => {
                    if (commitErr) {
                        console.error("Error committing transaction:", commitErr);
                        return conn.rollback(() => {
                            res.status(500).send("Commit failed. Rollback executed.");
                        });
                    }
                    res.send(`employee data updated successfully for ID: ${id}`);
                });
            }
        );
    });
});

app.patch("/dbconn/employees/:id",(req,res)=>{
    const id=req.params.id
    const name=req.body.name
    conn.query("update employee set name=? where id=?",[name,id],(err)=>{
        if(err)console.log(err)
        res.send("Employee name updated")
    })  
})

app.delete("/dbconn/employees/:id",(req,res)=>{
    const id=req.params.id
    conn.query("delete from employee where id=?",[id],(err)=>{
        if(err)console.log(err)
        res.send("Employee Deleted")
    })
})

app.listen(3300,()=>{ console.log("Server is running on port 3300")});
