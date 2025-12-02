
FLUSH PRIVILEGES;
create database node;
use node;
create table student(id int, name varchar(10), branch varchar(3));
INSERT INTO student VALUES (1, 'Alice', 'CSE');
INSERT INTO student VALUES (2, 'Gaurav', 'CSE');
INSERT INTO student VALUES (3, 'Bob', 'ECE');
INSERT INTO student VALUES (4, 'Charlie', 'ME');
INSERT INTO student VALUES (5, 'David', 'IT');
INSERT INTO student VALUES (6, 'Eve', 'EE');
select * from student;

delete from student where id = 7


---------------------------------------------------


CREATE TABLE employee (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    years_of_experience INT,
    designation VARCHAR(100),
    salary DECIMAL(10, 2)
);

INSERT INTO employee (id, name, years_of_experience, designation, salary) VALUES
(101, 'Rohan Sharma', 5, 'Senior Software Engineer', 1500000.00),
(102, 'Priya Singh', 2, 'Data Analyst', 750000.00),
(103, 'Amit Patel', 10, 'Project Manager', 2500000.00),
(104, 'Neha Verma', 1, 'Junior Web Developer', 500000.00),
(105, 'Sanjay Kumar', 15, 'VP of Operations', 4000000.00),
(106, 'Deepa Rao', 7, 'UX/UI Designer', 1200000.00),
(107, 'Vikas Gupta', 3, 'Marketing Executive', 650000.00),
(108, 'Aisha Khan', 8, 'Product Manager', 1800000.00),
(109, 'Rajesh Menon', 4, 'Cloud Administrator', 1000000.00),
(110, 'Shweta Iyer', 6, 'HR Specialist', 950000.00);

SELECT * FROM employee;