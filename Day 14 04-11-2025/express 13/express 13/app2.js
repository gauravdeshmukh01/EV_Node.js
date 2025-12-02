const express = require('express');
const bodyParser=require("body-parser")
const logger=require('./logger')
const app=express();
app.use(bodyParser.json())

app.post('/register',(req,res)=>{
    const{username,email}=req.body;
    if(!username || !email){
        logger.error('validation failed:Username and email are required')
        return res.status(404).json({error:`User and email are required`})
    }
    if(!email.includes('@')){
        logger.warn('validation failed:Username and email are required')
        return res.status(404).json({error:`User and email are required`})
    }
    logger.info(`user ${username} register successfully`)
    res.status(200).json({message:`welcome ${username}`})
})

app.use((err,req,res,next)=>{
    logger.error(`unhandled error:${err.message}`)
    res.status(404).json({error:`internal server error`})
})

app.listen(3000, () => {
    logger.info('Server started on port 3000');
});