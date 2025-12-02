// Simple File Upload and Download Server with Express and Multer
// npm init -y
// npm install express multer
// Create a folder named 'uploads' in the same directory as this file


// (1) for single file upload

// const express = require('express');
// const multer = require('multer');
// const path = require('path');

// const app = express();
// const PORT = 3000;

// // Make uploads folder accessible
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // Configure multer storage
// const storage = multer.diskStorage({
//  destination: (req, file, cb) => cb(null, 'uploads/'),
//  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
// });

// const upload = multer({ storage });

// // Upload route
// app.post('/upload', upload.single('myfile'), (req, res) => {
//  console.log('✅ File uploaded:', req.file.filename);
//  // FIX IS HERE: Used backticks (`) instead of single quotes (')
//  res.send(`File uploaded successfully! <a href="/uploads/${req.file.filename}">View File</a>`);
// });

// // Download route
// app.get('/download/:filename', (req, res) => {
//  const filePath = path.join(__dirname, 'uploads', req.params.filename);
//  res.download(filePath, (err) => {
//   if (err) {
//    console.error('❌ Error downloading:', err);
//    res.status(500).send('Error in download.');
//   }
//  });
// });

// // Start server
// app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));

//********************************************************************//

// (2) for multiple file upload

const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 3000;

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const storage = multer.diskStorage({
 destination: (req, file, cb) => cb(null, 'uploads/'),
 filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});

const upload = multer({ storage });

app.post('/upload', upload.array('myfiles', 10), (req, res) => {
    if (!req.files || req.files.length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    
    console.log(`${req.files.length} files uploaded.`);

    let responseHtml = '<h2>Files uploaded successfully!</h2><ul>';
    
    req.files.forEach(file => {
        responseHtml += `<li><a href="/uploads/${file.filename}">${file.originalname}</a> (${file.filename})</li>`;
        console.log(`File uploaded: ${file.filename}`);
    });

    responseHtml += '</ul>';
    res.send(responseHtml);
});

app.get('/download/:filename', (req, res) => {
    const filePath = path.join(__dirname, 'uploads', req.params.filename);
    res.download(filePath, (err) => {
        if (err) {
            console.error('Error downloading:', err);
            res.status(500).send('Error in download.');
        }
    });
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));