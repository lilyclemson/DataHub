const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const dishRouter = require('./routes/dishRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json())

app.use('./dishes', dishRouter);

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('<html><body>this is express server</body></html>');
});

const server = http.createServer(app)
server.listen(port, hostname, ()=>{ 
   console.log(`Running at http://${hostname}:${port}`);
});
