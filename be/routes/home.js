const router = require('express').Router()

router.route('/')
  .get((req, res)=>{
    res.sendFile(path.resolve(__dirname, '../fe/build/index.html'));
  })
  .post((req, res)=>{
    res.send('POST Works!!!');
  });

module.exports = router;