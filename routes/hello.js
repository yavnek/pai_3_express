var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  var name = req.query.name;
  if (name) {
    res.send('Witaj ' + name.charAt(0).toUpperCase() + name.slice(1) + '!');
  } else {
    res.send('Witaj!');
  }
});

module.exports = router;
