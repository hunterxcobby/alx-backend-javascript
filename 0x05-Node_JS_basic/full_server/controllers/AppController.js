// full_server/controllers/AppController.js
// create controller for root route

class AppController {
  // Define a static method to handle the root route
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

module.exports = AppController;
