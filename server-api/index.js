const router = require('express').Router();
const { serverData } = require('./server-data');

// Get dynamic param from url example
// Url - '/article/:id'
// req.params.id

// Get GET - params from request url
// const {mailType, mailCtg} = req.query

// Get POST, PUT - request data example
// const body = req.body;

// Return server error example
// res.status(404).json({error: "not found"});

router.get('/users', function(req, res, next) {
  res.json(serverData.users);
});

module.exports = router;
