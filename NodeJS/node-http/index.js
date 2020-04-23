const http = require("http");
const fs = require('fs');
const path = require('path');


const hostname = 'localhost';
const port  = 3000;

const server = http.createServer((req, res) => {
  console.log("Request for " + req.url +  ' by method ' + req.method );
  
  if (req.method == 'GET'){
    var fileUrl;
    if (req.url == '/') fileUrl = '/index.html'
    else fileUrl = req.url;

    var filePath = path.resolve('./public' + fileUrl);
    const fileExt = path.extname(filePath);
    if(fileExt == '.html'){
      fs.exists(filePath, (exists) =>{

        if(!exists){
          res.statusCode = 400;
          res.setHeader('Content-Type', 'text/plain');
          res.end('<html><h1>Not Found</h1></html>');
        }
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream(filePath).pipe(res);
      })
    }
    else{
      res.statusCode = 400;
      res.setHeader('Content-Type', 'text/plain');
      res.end('<html><h1>Not in HTML file</h1></html>');
    }
  }
  else{
    res.statusCode = 400;
    res.setHeader('Content-Type', 'text/plain');
    res.end('<html><h1>' + req.method + 'not supported </h1></html>');
  }

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});