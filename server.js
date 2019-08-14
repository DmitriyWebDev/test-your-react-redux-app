const express = require('express');
const serverApi = require('./server-api');
const bodyParser = require('body-parser');
const port = 3001;

const app = express();

app.use(function(req, res, next) {
  const origins = ['http://localhost:4444'];

  for (let i = 0; i < origins.length; i++) {
    const origin = origins[i];

    if (!req.headers.origin) continue;

    // Disable CORS for local server api
    if (req.headers.origin.indexOf(origin) > -1) {
      res.header('Access-Control-Allow-Origin', req.headers.origin);
    }
  }

  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.json());
app.use('/v1.0/', serverApi);

app.listen(port, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Node.js express server listening at http://localhost:' + port);
});
