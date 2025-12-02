const winston = require('winston');
const { combine, timestamp, json, printf, prettyPrint, errors } = winston.format;

const logger=winston.createLogger({
    level: 'info',
    format: combine(
        timestamp(),
        json(),
        prettyPrint(),
        errors({ stack: true }) 
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'app.log' })
    ]
})

module.exports=logger;