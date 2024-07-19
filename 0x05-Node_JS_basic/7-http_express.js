const express = require('express');
const fs = require('fs');
// const path = require('path');

// Function to count students from a CSV file asynchronously
function countStudents(databasePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(databasePath, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database')); // Reject the promise if there's an error reading the file
      } else {
        const lines = data.split('\n');
        const students = lines.filter((line) => line.trim() !== '').slice(1); // Remove header and empty lines

        const totalStudents = students.length; // Get total number of students

        const fieldCount = {}; // Object to store the count of students per field
        students.forEach((student) => {
          const [firstName, , , field] = student.split(','); // Destructure the student data
          if (field) {
            if (!fieldCount[field]) {
              fieldCount[field] = [];
            }
            fieldCount[field].push(firstName); // Add the student to the corresponding field
          }
        });

        let result = `Number of students: ${totalStudents}\n`; // Initialize the result string
        for (const [field, names] of Object.entries(fieldCount)) {
          result += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`; // Add the field count and list of students to the result string
        }
        resolve(result.trim()); // Resolve the promise with the final result
      }
    });
  });
}

// Create an instance of the Express application
const app = express();

// Define a route for the root URL '/'
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Define a route for the '/students' URL
app.get('/students', (req, res) => {
  const databasePath = process.argv[2];
  if (!databasePath) {
    res.status(500).send('Database path not provided');
    return;
  }

  res.write('This is the list of our students\n');
  countStudents(databasePath)
    .then((data) => {
      res.end(data);
    })
    .catch((err) => {
      res.status(500).end(err.message);
    });
});

// Make the server listen on port 1245
const port = 1245;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// Export the Express app instance
module.exports = app;
