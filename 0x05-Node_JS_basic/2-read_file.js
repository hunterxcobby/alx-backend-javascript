const fs = require('fs');

/**
 * Function that counts the number of students in a given CSV file
 * @param {string} path - Path to the CSV file
 * @returns {Promise} - Number of students in the CSV file
 * @throws {Error} - If the file does not exist, throw error
 * @throws {Error} - If the file does not contain student data, throw error
 */

function countStudents(path) {
  try {
    // read file content asynchronously
    const data = fs.readFileSync(path, 'utf8');

    const lines = data.split('\n'); // split data into lines

    // filter out empty lines and get student data
    const students = lines.filter((line) => line.trim() !== '').slice(1);

    console.log(`Number of students: ${students.length}`); // log total number of students

    const fieldCount = {}; // create map to store students by field

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
        `Number of students in ${field}: ${names.length}. List: ${names.join(
          ', ',
        )}`,
      );
    }
  } catch (error) {
    // Throw an error if the file cannot be read
    throw new Error('Cannot load the database');
  }
}

// export function for usage outside the module
module.exports = countStudents;
