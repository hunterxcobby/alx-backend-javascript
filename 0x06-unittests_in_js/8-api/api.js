// create instance of express named app listening on port 7865
// and log "API available on localhost port 7865" to browser console when server is started
// "Welcome to the payment system" message for GET request to /

const express = require('express');
const app = express();
const port = 7865;

app.get('/', (request, response) => {
  response.send('Welcome to the payment system');
});

const server = app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = server; // Export the server instance
