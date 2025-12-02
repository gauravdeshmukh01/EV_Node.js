// delete
// find the user and delete user found
// update MOCK_DATA.json file

const express=require('express')
const app=express()
const fs=require('fs')
app.use(express.json())
let usrs=fs.readFileSync("MOCK_DATA.json")
var users=JSON.parse(usrs)

app.delete("/app1/users/:id", (req,res)=>{
    const id=parseInt(req.params.id)
    const userId=users.findIndex((u)=>u.id===id)
    users.splice(userId,1)
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users,null,2), 
    (err,data)=>{
        const updatedusers=users
        res.send(`user with id ${id} deleted`)
    })
})
app.listen(3030,()=>console.log("Server Listening"))