var express = require('express');
var path =  require('path');
var router = express.Router();
var fs = require('fs');

function readFile(file, callback) {
  fs.readFile(path.join(__dirname, 'views/', file), 'utf8', callback);
}

function returnView(file, res) {
  readFile(file, (err, html) => {
    readFile('header.html', (err, headerHtml) => {
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
