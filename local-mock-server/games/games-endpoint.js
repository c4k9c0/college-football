var express = require('express');
var router = express.Router();

router.get('/games', (req, res) => {
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

module.exports = router;
