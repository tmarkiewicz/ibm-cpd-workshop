// https://medium.com/@adnanrahic/hello-world-app-with-node-js-and-express-c1eb7cfa8a30
// var express = require('express');
// var app = express();

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// });


require('dotenv').config({ silent: true });

const server = require('./server');
const port = process.env.PORT || process.env.VCAP_APP_PORT || 3000;

/**
 * Start up the Express server and listen on port for events
 */
server.then(app => {
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log('Watson Discovery SDU UI Server running on port: %d', port);
  });
});