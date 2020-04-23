const http = require("http");


const hostname = 'localhost';
const port  = 3000;

const server = http.createServer((req, res) => {
  console.log(req.headers);

  res.statusCode = 200;
  res.statusMessage = 'ok';
  res.setHeader = ('Content-Type', 'text/html');
  res.end('<html><body>hello, world</body></html>');

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});