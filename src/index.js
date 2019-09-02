const server = require('./server');

server
  .listen(process.env.PORT || 3000)
  .then(() => console.log(`HTTP server started on port: ${server.address().port}`))
  .catch(e => console.error(e));
