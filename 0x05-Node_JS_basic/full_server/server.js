// full_server/server.js
// setup server to use the defined routes

const express = require('express');
const router = require('./routes/index');

const app = express();
const port = 1245;

app.use('/', router);
app.use('/students', router);
app.use('/students/:major', router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
