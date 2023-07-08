var express = require('express');
var router = express.Router();


function amongus() {
  console.log("among us")
}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post("/activate-method", (req, res, next) => {
  amongus();
})

module.exports = router;
