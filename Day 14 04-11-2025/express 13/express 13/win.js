require('./app');  

const winston = require('winston');
const paymentLogger = winston.loggers.get('PaymentLogger');
const orderLogger = winston.loggers.get('orderLogger');

// paymentLogger.info('payment received successfully');
// orderLogger.error('order failed due to insufficient stock');


let requestHandler=(path)=>{
    const profiler=paymentLogger.startTimer();
    for(let i=0;i<100000;i++)j=i*3
    profiler.done({message:`request to ${path} is processed`})
}

requestHandler("/payment");