var express = require('express');
var path = require('path');
var router = express.Router();
var fs = require('fs');
var content = require('./content');

function readFile(file, callback) {
  fs.readFile(path.join(__dirname, 'views/', file), 'utf8', callback);
}

function returnView(name, res, title = 'Reviewddit', apply = (html) => html) {
  readFile('_layout.html', (err, layoutHtml) => {
    layoutHtml = layoutHtml.replace(/{{stylesheet-placeholder}}/g, name)
      .replace(/{{title-placeholder}}/g, title);
    readFile(`${name}.html`, (err, html) => {
      res.send(apply(layoutHtml.replace(/{{body-placeholder}}/g, html)));
    });
  });
}

/* GET home page. */
router.get('/', function (req, res, next) {
  returnView('home', res);
});
router.get('/review-details/:id', function (req, res, next) {
  returnView('reviewDetails', res, 'Review Details', function (html) {
    var post = content.posts[req.params.id];
    return html.replace(/{{title}}/g, post.title)
      .replace(/{{file}}/g, post.file)
      .replace(/{{text}}/g, post.text)
      .replace(/{{score}}/g, Math.floor(Math.random() * 1000))
      .replace(/{{rating}}/g, post.rating)
  });
});
router.get('/create-review', function (req, res, next) {
  returnView('createReview', res, 'Create Review');
});

router.get('/allPosts', function (req, res, next) {
  res.send(content.posts);
});


module.exports = router;