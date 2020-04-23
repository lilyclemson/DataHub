const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json);

dishRouter.route('/')
.all(  (req, res, next)=>{
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
})
.get(  (req, res, next) =>{
  res.end('will send all the dishes to you!');
})
.post(  (req, res, next)=>{
  res.end('Will add the dish:' +  req.body.name + ' with details: ' + req.body.description);
})
.put(  (req, res, next)=>{
  res.sendStatuscode = 403;
  res.end('PUT operation not supported on /dishes');
})
.delete(  (req, res, next)=>{
  res.end('Deleting all the dishes!');
});

// .get('/dishes/:dishid', (req, res, next) =>{
//   res.end('will send the details of the dish' + req.params.dishid+ ' to you!');
// })
// .post('/dishes/:dishid', (req, res, next)=>{
//   res.sendStatuscode = 403;
//   res.end('POST operation not supported on /dishes' + req.params.dishId)
// })
// .put('/dishes/:dishid', (req, res, next)=>{
//   res.write('Update the dish ' + req.params.dishid);
//   res.end('Will update the dish: ' + req.body.name + ' with details '+ req.body.description);
// })
// .delete('/dishes/:dishid', (req, res, next)=>{
//   res.end('Deleting the dish' + req.params.dishid + '!');
// });

module.exports = dishRouter;
