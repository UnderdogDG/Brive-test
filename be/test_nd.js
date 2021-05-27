const http = require('http');
const fs = require('fs');

const PORT = process.env.PORT || 3000;

// const server = http.createServer((req, res)=>{
//   switch (req.url) {
//     case '/':
//       fs.open('./users.json', 'r', (err, fd)=>{
//         if(err){ throw err };
//         console.log(fd);
//         fs.close(fd, (err)=>{
//           if(err) throw err;
//         })
//         // res.write(fd);
//       })
//       // res.write('index');
//       res.end();
//       break;
  
//     default:
//       res.write('404');
//       res.end();
//       break;
//   }
// });cd 

// server.listen(PORT);

console.log(`listening port: http://localhost:${PORT}`);