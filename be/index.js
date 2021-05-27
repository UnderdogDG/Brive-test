const express = require('express');
const path = require('path');
const cors = require('cors');

const home = require('./routes/home');
const employees = require('./routes/employees');
const e_404 = require('./routes/E_404');

const app = express();

const PORT = 5000;

app.use(express.static(path.resolve(__dirname, './')));
console.log(path.resolve(__dirname, './'));
app.use(express.static(path.resolve(__dirname, '../fe/build')));
app.use(cors());

// app.use(bodyParser.raw({type: 'application/json; charset=UTF-8'}));
app.use(express.text())
// app.use(express.json());
// app.use(express.raw({type: 'application/json; charset=UTF-8'}));

app.use('/', home);
app.use('/api/employees', employees);
app.use('*', e_404);



app.listen(PORT, ()=>{
  console.log(`Express listening in port: http://localhost:${PORT}...`);
})