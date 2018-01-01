var express = require('express');
var app = express();
const PORT = 3000;

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.get('/games', (req, res) => {
  res.json([{
    date: '2018-01-01',
    home: {
      name: 'Texas',
      mascot: 'Longhorns'
    },
    away: {
      name: 'Texas A&M',
      mascot: 'Aggies'
    }
  }]);
});

app.listen(PORT, () => {
  console.log('Server is up an running on port: ', PORT);
});
