const express = require('express');
const http = require('http');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use((req, res, next) => {
  console.log(req.header);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('<html><body>this is express server</body></html>');
});

const server = http.createServer(app)

server.listen(port, hostname, ()=>{ 
   console.log(`Running at http://${hostname}:${port}`);
});
