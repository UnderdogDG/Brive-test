const router = require('express').Router();
const path = require('path');
const { readFile, writeFile, unlink } = require('fs');

const FILE = path.resolve(__dirname, '../user.json');
const IMG_FOLDER = path.resolve(__dirname, '../imgs');
const ENCODING = 'utf8';

router.route('/')
  .get((req, res)=>{
    readFile(FILE, ENCODING, ( err, content )=>{
      let response, status;
      if(err){
        status = 400;
        response = err
      }
      else{
        status = 200;
        response = JSON.parse(content);
      }

      res.send({ status, response })
    });

  })
  .post((req, res)=>{
    let {image, ...employee} = JSON.parse(req.body);
    image = image.replace(/^data:image\/\w+;base64,/, '');

    readFile(FILE, ENCODING, ( err, content )=>{
      if(err){
        res.send({ status: 400, response: err });
      }
      else{
        let objectDoc = {...JSON.parse(content), [employee.uuid]: employee};
        let data = generateData(objectDoc);

        writeFile(FILE, data, { encoding: ENCODING }, (err)=>{
          if(err){
            res.send({ status: 400, response: err });
          }
          else{
            writeFile(`${IMG_FOLDER}\\${employee.uuid}.png`, image, 'base64', ()=>{
              if(err){
                res.send({ status: 400, response: err });
              }
              else{
                res.send({ status: 200, response: objectDoc });
              }
            });
          }
        });
      }
      // res.send({ status, response });
    });
  })
  .put((req, res)=>{

  })
  .delete((req, res)=>{
    let { uuid } = JSON.parse(req.body);
    const response = {
      status: 400,
      content: {}
    }

    readFile(FILE, ENCODING, ( err, content )=>{
      if(err){
        res.send({ status: 400, response: err });
      }
      else{
        let objectDoc = JSON.parse(content);
        delete objectDoc[uuid];
        let data = generateData(objectDoc);

        writeFile(FILE, data, { encoding: ENCODING }, (err)=>{
          if(err){
            res.send({ status: 400, response: err });
          }
          else{
            res.send({ status: 200, response: objectDoc });
            unlink(`${IMG_FOLDER}\\${uuid}.png`, ()=>{
              console.log(`user deleted: ${uuid}`);
            });
          }
        });
      }
    });
  });

  function generateData(content){
    let str = "{\n";
    let keys = Object.keys(content);
    for(i = 0; i < keys.length; i++){
      str += `\t"${keys[i]}": ${JSON.stringify(content[keys[i]])}${(i < (keys.length - 1)) ? ',\n' : '\n}'}`;
    };

    return str;
  }

module.exports = router;