const connection = require('./database');
const logger = require('./logger');

function getAllEmployees(req, res) {
  connection.query('SELECT * FROM employees', (err, data) => {
    if (err) {
      logger.error(`database error in getAllEmployees: ${err.message}`);
      return res.status(500).json({ error: 'Database error' });
    }
    logger.info('Fetched all employees successfully');
    res.json(data);
  });
}

function getEmployeeById(req, res) {
  const id = req.params.id;
  connection.query('SELECT * FROM employees WHERE empid = ?', [id], (err, data) => {
    if (err) {
      logger.error(`Error fetching employee with ID ${id}: ${err.message}`);
      return res.status(500).json({ error: 'Database error' });
    }
    if (data.length === 0) {
      logger.warn(`Employee with ID ${id} not found`);
      return res.status(404).json({ error: 'Employee not found' });
    }
    logger.info(`Fetched employee with ID ${id}`);
    res.json(data);
  });
}

function addEmployee(req, res) {
  const { empid, empName, empExperience, empDesignation, empSalary } = req.body;

  if (!empid || !empName || !empDesignation || !empSalary) {
    logger.warn('Add employee validation failed: Missing required fields');
    return res.status(400).json({ error: 'Missing required employee fields' });
  }

  connection.query(
    'INSERT INTO employees VALUES (?, ?, ?, ?, ?)',
    [empid, empName, empExperience, empDesignation, empSalary],
    (err) => {
      if (err) {
        logger.error(`Error adding employee: ${err.message}`);
        return res.status(500).json({ error: 'Database error' });
      }
      logger.info(`Employee ${empName} (ID: ${empid}) added successfully`);
      res.send('Employee added successfully');
    }
  );
}

function updateEmployee(req, res) {
  const { empName, empExperience, empDesignation, empSalary, empid } = req.body;

  if (!empid) {
    logger.warn('Update employee validation failed: Employee ID is missing');
    return res.status(400).json({ error: 'Employee ID required' });
  }

  const sql = `
    UPDATE employees 
    SET empName = ?, empExperience = ?, empDesignation = ?, empSalary = ?
    WHERE empid = ?`;

  connection.query(sql, [empName, empExperience, empDesignation, empSalary, empid], (err, result) => {
    if (err) {
      logger.error(`Error updating employee ID ${empid}: ${err.message}`);
      return res.status(500).json({ error: 'Database error' });
    }
    if (result.affectedRows === 0) {
      logger.warn(`Update failed: Employee with ID ${empid} not found`);
      return res.status(404).json({ error: 'Employee not found' });
    }
    logger.info(`Employee ID ${empid} updated successfully`);
    res.send('Employee updated successfully');
  });
}

function deleteEmployee(req, res) {
  const id = req.params.id;
  connection.query('DELETE FROM employees WHERE empid = ?', [id], (err, result) => {
    if (err) {
      logger.error(`Error deleting employee ID ${id}: ${err.message}`);
      return res.status(500).json({ error: 'Database error' });
    }
    if (result.affectedRows === 0) {
      logger.warn(`Delete failed: Employee with ID ${id} not found`);
      return res.status(404).json({ error: 'Employee not found' });
    }
    logger.info(`Employee ID ${id} deleted successfully`);
    res.send('Employee deleted successfully');
  });
}

module.exports = {
  getAllEmployees,
  getEmployeeById,
  addEmployee,
  updateEmployee,
  deleteEmployee
};
