//post-add new data
//1.recieve data from the user{"id":"id","first_name":"first_name","email":"email" }
//2.insert the data in to array
//3.push fn to add data in to the array
//4.reading the data from mock_data.json
//5.add in to the file


const express=require('express')
const app=express()
const fs=require('fs')

app.use(express.json())
let usrs=fs.readFileSync("MOCK_DATA.json")
var users=JSON.parse(usrs)

app.use((req, res, next) => {
    req.name = 'ABC';
  console.log('A request was received at:', new Date().toLocaleTimeString());
  next(); 
});

app.use("/api/users", (req, res, next) => {
    console.log("middleware2", req.name)
    console.log("Time:", Date.now())
    next()
})

app.use((req, res, next) => {
    fs.appendFile('log.txt',
        `${Date.now()}, ${req.name}, ${req.method}, ${req.path}`,
        (err, data) => { next() }
    )
})


app.post("/api/users", (req,res)=>{
//const body=req.body
const newId=users.length+1
const {first_name,email}=req.body

users.push({"id":newId,"first_name":first_name,"email":email})
fs.writeFileSync("./MOCK_DATA.json", JSON.stringify(users), (err,data)=>{
    //res.send(users)
})
res.send("user added")
})

app.listen(3030,()=>console.log("Server Listening"))