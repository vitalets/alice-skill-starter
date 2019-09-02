const chai = require('chai');
const User = require('alice-tester');
const getPort = require('get-port');
const Logger = require('loggee');
const server = require('../src/server');

chai.config.truncateThreshold = 0;
Logger.setLogLevel(process.env.LOGGEE_LEVEL || 'none');

(async () => {
  const port = await getPort();
  User.config.webhookUrl = `http://localhost:${port}`;

  Object.assign(global, {
    assert: chai.assert,
    User,
  });

  before(async () => {
    await server.listen(port);
  });

  after(async () => {
    await server.close();
  });

})();
