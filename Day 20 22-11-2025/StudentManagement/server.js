const express = require('express');
const mongoose = require('mongoose');
const studentRoutes = require('./studentRoutes');

const app = express();
const PORT = 3000;
const DB_URI = 'mongodb://localhost:27017/studentDB'; 

app.use(express.json()); 

// Connect to MongoDB
mongoose.connect(DB_URI)
    .then(() => console.log('DB Connected'))
    .catch(err => console.error('DB Error:', err));

app.use('/api/students', studentRoutes);

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
