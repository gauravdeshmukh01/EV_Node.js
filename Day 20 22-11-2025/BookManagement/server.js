const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./bookRoutes');

const app = express();
const PORT = 3000;
const DB_URI = 'mongodb://localhost:27017/libraryDB'; 

app.use(express.json()); 

// Connection handling
mongoose.connect(DB_URI)
    .then(() => console.log('MongoDB: Connected to libraryDB'))
    .catch(err => console.error('MongoDB: Connection failed:', err));

// Route mounting
app.use('/api/books', bookRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});