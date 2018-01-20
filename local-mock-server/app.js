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
      mascot: 'Longhorns',
      id: 48,
      wins: 3,
      losses: 1
    },
    away: {
      name: 'Texas A&M',
      mascot: 'Aggies',
      id: 49,
      wins: 2,
      losses: 2
    }
  }, {
    date: '2018-01-01',
    home: {
      name: 'Tulane',
      mascot: 'Green Wave',
      id: 60,
      wins: 4,
      losses: 0
    },
    away: {
      name: 'Tulsa',
      mascot: 'Golden Hurricane',
      id: 61,
      wins: 1,
      losses: 3
    }
  }]);
});

app.listen(PORT, () => {
  console.log('Server is up an running on port: ', PORT);
});
