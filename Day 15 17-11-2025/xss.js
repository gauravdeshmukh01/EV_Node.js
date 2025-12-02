// NOde.js security //

// (1) Cross - site scripting (XSS) is a security vulnerability typically found in web applications.


// Preventing XSS in Node.js
// Escape Output: Use libraries like escape-html to escape HTML entities.

// const escapeHtml = require('escape-html');
// res.send(`You entered: ${escapeHtml(userInput)}`);

// import express from "express";
// import escapeHtml from "escape-html";
// import helmet from "helmet";
// import xss from "xss";

// const app = express();
// app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.send(`
//     <form method="POST" action="/submit">
//       <input type="text" name="userInput" 
//       value="<script>alert('XSS')</script>"
//       />
//       <button type="submit">Submit</button>
//     </form>
//   `);
// });

// app.post("/submit", (req, res) => {
//   const userInput = xss(req.body.userInput);
//   res.send(`You entered: ${escapeHtml(userInput)}`);
// });

// app.listen(3000, () => {
//   console.log("Server running on port 3000");
// });

// ********************************************************************** //

// (1) Cross site scripting (XSS)
 // method 1 

// const express=require('express')
// const bodyparser=require('body-parser')
// const app=express()
// app.use(bodyparser.urlencoded({extended:true}))
// app.get('/',(req,res)=>{
//     res.send(`
//     <form action="/script" method="post">
//         <input type="text" name="message"/>
//         <button>POST</button>
//     </form>
//     `)
// })

// app.post('/script',(req,res)=>{
//     res.send(`Hi ${req.body.message}`)
// })

// app.listen(3080,()=>console.log("server Listening"))

// output ->  use this  <script>alert("Hacked")</script>

// ************************************************************** //

// method 2 using escape-html    npm install escape-html

//Cross site scripting-XSS
// const express=require('express')
// const bodyparser=require('body-parser')
// const escape=require('escape-html')
// const app=express()
// app.use(bodyparser.urlencoded({extended:true}))
// app.get('/',(req,res)=>{
//     res.send(`
//     <form action="/script" method="post">
//         <input type="text" name="message"/>
//         <button>POST</button>
//     </form>
//     `)
// })

// app.post('/script',(req,res)=>{
//     res.send(`Hi ${escape(req.body.message)}`)
// })

// app.listen(3080,()=>console.log("server listening"))

// output -> use this <script>alert("Hacked")</script>
// now it will not work and show as it is  &lt;script&gt;alert(&quot;Hacked&quot;)&lt;/script&gt;

// **************************************************************** //

// method 3 using sanitize-html     npm install sanitize-html

// const express=require('express')
// const bodyparser=require('body-parser')
// const sanitize=require('sanitize-html')
// const app=express()
// app.use(bodyparser.urlencoded({extended:true}))
// app.get('/',(req,res)=>{
//     res.send(`
//     <form action="/script" method="post">
//         <input type="text" name="message"/>
//         <button>POST</button>
//     </form>
//     `)
// })

// app.post('/script',(req,res)=>{
//     const rawInput=req.body.message;
//     const cleanInput=sanitize(rawInput,{
//         allowedTags:['b','i'],
//         allowedAttributes:{}
//     })

//     res.send(`
//         <h2>Sanitized Output</h2>
//         <div>${cleanInput}</div>
//     `)
// })

// app.listen(3080,()=>console.log("server Listening"))

// output -> use this <b>alert("Hacked")</b>  it will work as bold
// use this <script>alert("Hacked")</script> it will not work and show as blank
