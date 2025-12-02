const express = require('express')
const bodyparser = require('body-parser')
const session = require('express-session')
const csrf = require('csurf')

const app = express()

app.use(bodyparser.urlencoded({ extended: true }))

app.use(session({
    secret: 'mykey',
    resave: false,
    saveUninitialized: true
}))

const csrfProtection = csrf()
app.use(csrfProtection)

app.get('/', (req, res) => {
    const form = `
    <form method='post' action='/process'>
        <input type='hidden' name='_csrf' value='${req.csrfToken()}'/>
        <input type='text' name='name'/>
        <button>Submit</button>
    </form>
    `
    res.send(form)
})

app.post('/process', (req, res) => {
    res.send(`Hello ${req.body.name}. Your profile submitted`)
})

app.listen(3080, () => console.log("server Listening"))
// ********************************************************************** //

// here getting error  

// const express=require('express')
// const bodyparser=require('body-parser')
// const session=require('express-session')
// const csrf=require('csurf')
// const app=express()
// app.use(bodyparser.urlencoded({extended:true}))
// app.use(session({
//     secret:'mykey',
//     resave:false,
//     saveUninitiated:true
// }))
// const csrfProtection=csrf()
// app.use(csrfProtection)

// app.get('/',(req,res)=>{
//     const form=`
//     <form method="post" action="/process">
//     <input type="hidden" name="_csrf" value="${generateToken()}"/>
//     <input type="text" name="name"/>
//     <button>Submit</button>
//     </form>
//     `
//     res.send(form)
// })

// app.post('/process',(req,res)=>{
//     res.send(`Hello ${req.body.name}. Your profile submitted`)
// })

// app.listen(3080,()=>console.log("server Listening"))