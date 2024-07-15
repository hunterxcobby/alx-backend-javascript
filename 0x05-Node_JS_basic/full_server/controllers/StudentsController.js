const readDatabase = require('../utils');

// full_server/controllers/StudentsController.js
// create controller for handling student-related routes

class StudentsController {
  static async getAllStudents(req, res) {
    const databasePath = process.argv[2];

    try {
      const fields = await readDatabase(databasePath);
      let responseText = 'This is the list of our students\n';

      const sortedFields = Object.keys(fields).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

      sortedFields.forEach((field) => {
        responseText += `Number of students in ${field}: ${
          fields[field].length
        }. List: ${fields[field].join(', ')}\n`;
      });

      res.status(200).send(responseText.trim());
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const databasePath = process.argv[2];
    const { major } = req.params;

    // Check if major is valid
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const fields = await readDatabase(databasePath);

      // Check if major exists in the database
      if (!fields[major]) {
        res.status(500).send('Cannot load the database');
        return;
      }

      res.status(200).send(`List: ${fields[major].join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
