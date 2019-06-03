var express = require('express');
var path =  require('path');
var router = express.Router();

function html(file) {
  return path.join(__dirname, 'views/', file);
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(html('./index.html'));
});

router.get('/create-review', function(req, res, next) {
  res.sendFile(html('./createReview.html'));
});


module.exports = router;
