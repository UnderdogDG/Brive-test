const router = require('express').Router();

router.all('/', (req, res)=>{
  res.status(404).send("Not Found!!!!")
});

module.exports = router;