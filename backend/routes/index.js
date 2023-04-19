var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  const data = {
    ip: req.ip,
    host: req.host,
    path: req.path,
    protocol: req.protocol,
    originalUrl: req.originalUrl,
    method: req.method,
  }
  res.send(data)
});

router.post('/', (req, res) => {
  const data = {
    ip: req.ip,
    host: req.host,
    path: req.path,
    protocol: req.protocol,
    originalUrl: req.originalUrl,
    method: req.method,
    body: req.body
  }
  res.send(data)
})

router.put('/', (req, res) => {
  const data = {
    ip: req.ip,
    host: req.host,
    path: req.path,
    protocol: req.protocol,
    originalUrl: req.originalUrl,
    method: req.method,
    body: req.body
  }
  res.send(data)
})

module.exports = router;
