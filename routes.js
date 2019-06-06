var express = require('express');
var path =  require('path');
var router = express.Router();
var fs = require('fs');

function readFile(file, callback) {
  fs.readFile(path.join(__dirname, 'views/', file), 'utf8', callback);
}

function returnView(name, res, title='Reviewddit') {
  readFile('_layout.html', (err, layoutHtml) => {
    layoutHtml = layoutHtml.replace('{{stylesheet-placeholder}}', `${name}.css`)
                           .replace('{{title-placeholder}}', title);
    readFile(`${name}.html`, (err, html) => {
      res.send(layoutHtml.replace('{{body-placeholder}}', html));
    });
  });
}

/* GET home page. */
router.get('/', function(req, res, next) {
  returnView('home', res);
});
router.get('/review-details', function(req, res, next) {
  returnView('reviewDetails', res, 'Review Details');
});
router.get('/create-review', function(req, res, next) {
  returnView('createReview', res, 'Create Review');
});
 

module.exports = router;
