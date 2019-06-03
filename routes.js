var express = require('express');
var path =  require('path');
var router = express.Router();
var fs = require('fs');

function returnView(file, res) {
  var file = fs.readFile(path.join(__dirname, 'views/', file), 'utf8', (err, html) => {
    if (err) throw err;
    fs.readFile(path.join(__dirname, 'views/header.html'), 'utf8', (err, headerHtml) => {
      if (err) throw err;
      res.send(html.replace('<headerPlaceholder/>', headerHtml));
    });
  });
}

/* GET home page. */
router.get('/', function(req, res, next) {
  returnView('./index.html', res);
});

router.get('/create-review', function(req, res, next) {
  returnView('./createReview.html', res);
});
 

module.exports = router;
