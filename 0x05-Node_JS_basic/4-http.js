const http = require('http');

// create the HTTP server and assign it to the variable 'app'
const app = http.createServer((req, res) => {
  // set the response header content type to plain text
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // write the response body
  res.end('Hello Holberton School!');
});

// make the server listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// export the server
module.exports = app;
