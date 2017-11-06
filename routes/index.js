var express = require('express');
var router = express.Router();



router.get('/forms-:num(\\d+)', (req, res) => {
  console.log(req.params.num, req.query.level);
});

router.post('/', (req, res) => {
  console.log(req.body.username);
});


// Exo middleware
router.use('/supermiddleware', function (req, res, next) {
  console.log('hello middleware');
  next();
}, function (req, res, next) {
  res.send('hello world');
});
// Exo middleware

module.exports = router;