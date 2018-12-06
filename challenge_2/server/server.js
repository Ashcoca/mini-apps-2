const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public')));

app.get('/currentprice', (req, res) => {
  // let prev = new Date();
  // prev.setDate(1);
  // prev.setMonth(prev.getMonth()-1);
  // let current = new Date()
  fetch('https://api.coindesk.com/v1/bpi/historical/close.json?start=&end=<VALUE>')
    .then(response => response.json())
    .then(data => {
      res.send(data);
    })
    .catch(error => { console.log(error) });
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));

/*
?index=[USD/CNY]The index to return data for. Defaults to USD.
?currency=<VALUE>The currency to return the data in, specified in ISO 4217 format. Defaults to USD.
?start=<VALUE>&end=<VALUE> Allows data to be returned for a specific date range. Must be listed as 
a pair of start and end parameters, with dates supplied in the YYYY-MM-DD format, e.g. 2013-09-01 for September 1st, 2013.

https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-01&end=2013-09-05

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}
let x = new Date()
undefined
formatDate(x)
"2018-12-06"
*/

