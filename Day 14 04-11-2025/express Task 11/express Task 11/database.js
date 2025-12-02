const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '7788',  
  database: 'employeedb'
});

connection.connect((err) => {
  if (err) {
    console.log('Error connecting:', err);
  } else {
    console.log('Connected to MySQL employeedb');
  }
});

module.exports = connection;

