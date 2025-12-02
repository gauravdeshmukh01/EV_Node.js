const winston = require('winston');

const { combine, timestamp, json, printf, prettyPrint, errors } = winston.format;


winston.loggers.add('orderLogger', {
    level: 'info',
    format: combine(
        timestamp(),
        json(),
        prettyPrint(),
        errors({ stack: true }) 
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'orders.log' })
    ],
    defaultMeta: { service: 'orderServices' }
});


winston.loggers.add('PaymentLogger', {
    level: 'info',
    format: combine(
        timestamp(),
        json(),
        prettyPrint(),
        errors({ stack: true })  
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'payments.log' })
    ],
    defaultMeta: { service: 'paymentServices' }
});
