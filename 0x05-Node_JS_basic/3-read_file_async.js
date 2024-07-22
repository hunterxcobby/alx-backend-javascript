const fs = require('fs');

/**
 * Function to count students from a CSV file asynchronously.
 * @param {string} path - The path to the CSV file.
 * @returns {Promise<void>} - A promise that resolves when the operation is complete.
 * @throws Will throw an error if the file cannot be read.
 */

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

        // Log the total number of students
        console.log(`Number of students: ${students.length}`);

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

        // Log the number of students in each field
        for (const [field, names] of Object.entries(fieldCount)) {
          console.log(
            `Number of students in ${field}: ${
              names.length
            }. List: ${names.join(', ')}`,
          );
        }
        // Resolve the promise after logging
        resolve();
      }
    });
  });
}

module.exports = countStudents;
