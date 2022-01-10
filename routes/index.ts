import express from 'express';
var indexRouter = express.Router();

/* GET home page. */
indexRouter.get('/', function(req, res, next) {
  res.send("Hello");
});

export default indexRouter;
