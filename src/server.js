const express = require('express');
const path = require('path');
const app = express();
const fetch = require('node-fetch');
const API_KEY = '1611b57cd45b95fdf4632fcdc5fc4a86';
const url = `http://api.openweathermap.org/data/2.5/forecast?q=London,uk&units=metric&APPID=${API_KEY}`;

app.use(express.static(path.join(__dirname, '../build')));

app.get('/weather', function (req, res) {
  let status = 500;
  fetch(url)
  .then((response) => {
    status = response.status;
    if (!response.ok) {
      throw Error(response.statusText);
    }

    return response;
  })
  .then((response) => response.json())
  .then((weather) => res.send(weather))
  .catch((e) => res.status(status).send(e.message));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on port', process.env.PORT || 3000);
});
