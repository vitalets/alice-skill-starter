const {promisify} = require('util');
const micro = require('micro');
const Logger = require('loggee');
const replies = require('./replies');

const server = micro(async req => {
  const {request, session, version} = await micro.json(req);
  const response = replies.handle(request.command);
  log(session, request.command, response.text);
  return {version, session, response};
});

function log(session, userText, botText) {
  const logger = Logger.create(`User ${session.user_id.slice(0, 6)}`);
  logger.log(`-> "${userText}"`);
  logger.log(`<- "${botText}"`);
}

server.listen = promisify(server.listen);
server.close = promisify(server.close);

module.exports = server;
