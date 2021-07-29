var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "yoooo",
    user: "yakob",
    added: new Date()
  },
  {
    text: "I'm finna get litttttt",
    user: "aleksei",
    added: new Date()
  },
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages });
});

/* GET new messages. */
router.get('/new', function(req, res, next) {
  res.render('form', { title: 'New'});
});

/* POST new messsages */
router.post('/new', function(req, res, next) {
  messages.push({
    text: req.body.message,
    user: req.body.authorName,
    added: new Date()
  });
  res.redirect('/');
});


module.exports = router;
