// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');

// const app = express();
// const PORT = 3001;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static(path.join(__dirname, '../public')));


// app.listen(PORT, () => {
//   console.log(`listening on port ${PORT}`);
// });

const path = require('path')
const router = jsonServer.router(path.join(__dirname, '../data/db.json'))

const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);


server.defaults(static path.join(__dirname, )




server.listen(3000, () => {
  console.log('JSON Server is running');
});