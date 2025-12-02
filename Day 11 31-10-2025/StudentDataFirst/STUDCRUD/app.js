const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

let studentData = fs.readFileSync('Students.json', 'utf-8');
let students = JSON.parse(studentData);


// GET all students
app.get('/api/students', (req, res) => {
    res.send(students);
});


// GET in HTML format
app.get('/api/students/html', (req, res) => {
    const html = `
        <h2>Student List</h2>
        <ul>
            ${students.map(s => `<li>${s.id} - ${s.name} (${s.branch}) - ${s.email}</li>`).join('')}
        </ul>`;
    res.send(html);
});


// GET by id
app.get('/api/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find((s) => s.id == id);
    res.send(student);
});


// POST
app.post('/api/students', (req, res) => {
    const { name, branch, email } = req.body;

    const newId = students.length + 1;
    const newStudent = { id: newId, name, branch, email };
    students.push(newStudent);

    fs.writeFileSync('Students.json', JSON.stringify(students, null, 2));
    res.send("Student added successfully");
});


// PUT 
app.put('/api/students/:id', (req, res) => {
    const id = req.params.id;
    const { name, branch, email } = req.body;

    const student = students.find((s) => s.id == id); 
    student.name = name;
    student.branch = branch;
    student.email = email;

    fs.writeFileSync('Students.json', JSON.stringify(students));
    res.send(`Student with id ${id} updated successfully`);
});


// PATCH
app.patch('/api/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updates = req.body; 

    const student = students.find((s) => s.id === id); 

    if (!student) {
        return res.status(404).send('Student not found');
    }

    Object.keys(updates).forEach(key => {
        student[key] = updates[key];
    });

    fs.writeFileSync('Students.json', JSON.stringify(students, null, 2));

    res.send(`Student with id ${id} partially updated successfully`);
});


// DELETE 
app.delete('/api/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const studentIndex = students.findIndex(s => s.id === id);

    const deletedStudent = students.splice(studentIndex, 1);
    fs.writeFileSync('Students.json', JSON.stringify(students, null, 2));

    res.send(`Student with id ${id} deleted successfully`);
});


app.listen(3030, () => {
    console.log("Server running at http://localhost:3030");
});
