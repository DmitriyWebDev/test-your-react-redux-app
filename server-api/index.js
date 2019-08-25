const router = require('express').Router();
const { serverData } = require('./server-data');
const { getRandomId } = require('./utils');

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
  setTimeout(() => {
    res.json(serverData.users);
  }, 0); // timeout for dev only!!!
});

router.post('/add-user', function(req, res, next) {
  const newUserId = getRandomId();
  const { firstName, lastName, position } = req.body;
  const newUser = {
    id: newUserId,
    firstName,
    lastName,
    position,
  };

  serverData.users.push(newUser);

  setTimeout(() => {
    res.json({});
  }, 500); // timeout for dev only!!!
});

router.delete('/delete-user', function(req, res, next) {
  const { userId } = req.body;

  serverData.users = serverData.users.filter(user => user.id !== userId);

  setTimeout(() => {
    res.json({});
  }, 500); // timeout for dev only!!!
});

module.exports = router;
