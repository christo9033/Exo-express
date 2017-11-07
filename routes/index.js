var express = require('express');
var router = express.Router();



router.get('/forms-:num(\\d+)', (req, res) => {
  console.log(req.params.num, req.query.level);
});

router.post('/', (req, res) => {
  console.log(req.body.username);
});



// Exo middleware
router.use('/superMiddleware', function (req, res, next) {
  console.log('hello middleware');
  next();
}, function (req, res, next) {
  res.send('hello world');
});
// Exo middleware

// Exo Session
router.get('/session-in', (req, res) => {
  req.session.song = 'be bop a lula';
  res.end() 
});
router.get('/session-out', (req, res) => {
  res.send(req.session.song)
});
// Exo Session

module.exports = router;