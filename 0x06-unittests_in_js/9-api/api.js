// create instance of express named app listening on port 7865
// and log "API available on localhost port 7865" to browser console when server is started
// "Welcome to the payment system" message for GET request to /
// include the new endpoint /cart/:id with validation to ensure :id is a number

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req, res) => {
  const id = req.params.id;
  res.send(`Payment methods for cart ${id}`);
});

app.use((req, res) => {
  res.status(404).send('Not Found');
});

const port = 7865;
const server = app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = server; // Export the server instance
