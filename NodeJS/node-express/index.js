const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json())

app.all('/dishes', (req, res, next)=>{
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
});

app.get('/dishes', (req, res, next) =>{
  res.end('will send all the dishes to you!');
});

app.post('/dishes', (req, res, next)=>{
  res.end('Will add the dish:' +  req.body.name + ' with details: ' + req.body.description);
});

app.put('/dishes', (req, res, next)=>{
  res.sendStatuscode = 403;
  res.end('PUT operation not supported on /dishes');
});

app.delete('/dishes', (req, res, next)=>{
  res.end('Deleting all the dishes!');
});


app.get('/dishes/:dishid', (req, res, next) =>{
  res.end('will send the details of the dish' + req.params.dishid+ ' to you!');
});

app.post('/dishes/:dishid', (req, res, next)=>{
  res.sendStatuscode = 403;
  res.end('POST operation not supported on /dishes' + req.params.dishId);});

app.put('/dishes/:dishid', (req, res, next)=>{
  res.write('Update the dish ' + req.params.dishid);
  res.end('Will update the dish: ' + req.body.name + ' with details '+ req.body.description);
});

app.delete('/dishes/:dishid', (req, res, next)=>{
  res.end('Deleting the dish' + req.params.dishid + '!');
});

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
