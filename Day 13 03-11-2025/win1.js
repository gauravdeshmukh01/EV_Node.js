// const winston=require('winston')
// const logger=winston.createLogger({
//     // level:'debug',
//     level:'warn',
//     format:winston.format.json(),
//     transports:[new winston.transports.Console(),
//         new winston.transports.File({filename: 'win1.log'}) // will create win1.log file in the current directory
//     ]
// })

// logger.info("An info log")
// logger.error("An error log")

// *********************************************************** //
// same but more readable output
// const winston=require('winston')
// const logger=winston.createLogger({
//     level:'info',
//     format:winston.format.cli(),
//     transports:[
//         new winston.transports.Console(),
//         // new winston.transports.File({filename: 'win1.log'})
//     ]
// })

// logger.info("An info log")
// logger.error("An error log")

// *********************************************************** //


// const winston=require('winston')
// const {combine,timestamp,printf}=winston.format

// const logFormat = printf(({ level, message, timestamp }) => {
//     return `${timestamp} ${level}: ${message}`;
// });

// const logger=winston.createLogger({
//     level:'info',
//     format:combine(
//         timestamp({
//             format: 'YYYY-MM-DD HH:mm:ss' // Define the timestamp format here
//         }),
//         logFormat
//     ),
//     transports:[
//         new winston.transports.Console(),
//         new winston.transports.File({filename: 'win1.log'})
//     ]
// })

// logger.info("An info log")
// logger.error("An error log")

// *********************************************************** //

// const winston=require('winston')
// const {combine,timestamp,json,prettyPrint}=winston.format

// const requestLog = {method:"GET", isAuthenticated:false}

// const logger=winston.createLogger({
//     level:'info',
//     format:combine(timestamp(),json(),prettyPrint()),
//     transports:[
//         new winston.transports.Console(),
//         new winston.transports.File({filename: 'win1.log', level:'info'})
//     ]
// })

// logger.info("An info log",requestLog)
// logger.error("An error log",requestLog)

// // OR 

// const childlogger=logger.child(requestLog)
// childlogger.info("An info log")
// childlogger.error("An error log")

// *********************************************************** //

const winston=require('winston')
const {combine,timestamp,json,prettyPrint,errors}=winston.format

const requestLog = {method:"GET", isAuthenticated:false}

const logger=winston.createLogger({
    level:'info',
    format:combine(timestamp(),json(),prettyPrint(),errors({stack:true})),
    transports:[
        new winston.transports.Console(),
        new winston.transports.File({filename: 'win1.log', level: 'warn'})
    ]
})

const childlogger=logger.child(requestLog)
childlogger.info("An info log")
childlogger.error("An error log", new Error('504 Gateway Timeout'))