// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');

// const app = express();
// const PORT = 3001;

// app.use(bodyParser.json());listening on port ${PORT}`);
// });
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static(path.join(__dirname, '../public')));


// app.listen(PORT, () => {
//   console.log(`

const path = require('path');
const jsonServer = require('json-server');

const server = jsonServer.create();
const middlewares = jsonServer.defaults();

const router = jsonServer.router(path.join(__dirname, '../data/db.json'));


server.use(middlewares);
server.use(router);






server.listen(3001, () => {
  console.log('JSON Server is running');
});