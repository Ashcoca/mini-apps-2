const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public')));

//this formats the date to the proper YYYY-MM-DD format
const formatDate = (date) => {
  let today = new Date(date);
  let month = '' + (today.getMonth() + 1);
  let day = '' + today.getDate();
  let year = '' + today.getFullYear();
  month.length < 2 ? month = '0' + month : month = month;
  day.length < 2 ? day = '0' + day : day = day; 

  return [year, month, day].join('-');
};

app.get('/currentprice', (req, res) => {
  let currentDate = new Date();
  formatDate(currentDate);

  fetch('https://api.coindesk.com/v1/bpi/historical/close.json')
    .then(response => response.json())
    .then(data => {
      res.send(data);
    })
    .catch(error => { console.log(error) });
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));


