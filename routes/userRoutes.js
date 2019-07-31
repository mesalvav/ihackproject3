const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/getCurrentuser', (req, res, next) => {
  let newObject = {};
  let random = Math.floor(Math.random()*100);
  newObject.username = "El cool boy #" + random;
  newObject._id = "1234567890";

  res.status(200).json([newObject]);
});

module.exports = router;