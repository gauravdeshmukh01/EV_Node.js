const express = require('express');
const logger = require('./logger');
const emp = require('./employeeFunctions');

const app = express();
app.use(express.json());


app.get('/app/employees', emp.getAllEmployees);
app.get('/app/employees/:id', emp.getEmployeeById);
app.post('/app/employees', emp.addEmployee);
app.put('/app/employees', emp.updateEmployee);
app.delete('/app/employees/:id', emp.deleteEmployee);


app.use((err, req, res, next) => {
  logger.error(`Unhandled error: ${err.message}`);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(3000, () => {
  logger.info('Server running on port 3000');
});
