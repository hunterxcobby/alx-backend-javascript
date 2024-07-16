// full_server/utils.js
// create utility function to read database asynchronously

import fs from 'fs';

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database')); // reject the promise if there is an error reading the file
        return;
      }

      const students = data
        .trim()
        .split('\n')
        .slice(1)
        .filter((line) => line !== ''); // remove empty lines from the data
      const fields = {};

      students.forEach((student) => {
        const [firstName, , , field] = student.split(','); // extract firstName and field from each student record
        // create an array for each field if it doesn't exist
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstName); // add firstName to corresponding field array
      });

      resolve(fields); // resolve the promise with the fields object
    });
  });
}

module.exports = readDatabase;
