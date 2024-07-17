const http = require('http');
const url = require('url');
const fs = require('fs');

// Function to count students from a CSV file asynchronously
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        // If there's an error reading the file, reject the promise
        reject(new Error('Cannot load the database'));
      } else {
        // Split the data into lines
        const lines = data.split('\n');

        // Filter out empty lines and get student data
        const students = lines.filter((line) => line.trim() !== '').slice(1);

        // Create a map to count students by field
        const fieldCount = {};

        students.forEach((student) => {
          const [firstName, , , field] = student.split(',');

          if (field) {
            if (!fieldCount[field]) {
              fieldCount[field] = [];
            }
            fieldCount[field].push(firstName);
          }
        });

        // Prepare the output string
        let output = `Number of students: ${students.length}\n`;

        for (const [field, names] of Object.entries(fieldCount)) {
          output += `Number of students in ${field}: ${
            names.length
          }. List: ${names.join(', ')}\n`;
        }

        // Resolve the promise with the output string
        resolve(output.trim());
      }
    });
  });
}

// Create the HTTP server and assign it to the variable 'app'
const app = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url, true);

  if (reqUrl.pathname === '/') {
    // Handle root route
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (reqUrl.pathname === '/students') {
    // Handle /students route
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    countStudents(process.argv[2])
      .then((data) => {
        res.end(`This is the list of our students\n${data}`);
      })
      .catch((error) => {
        res.end(`This is the list of our students\n${error.message}`);
      });
  } else {
    // Handle 404 Not Found
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// Make the server listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the server
module.exports = app;
