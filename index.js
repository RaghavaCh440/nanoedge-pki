const { generateKeyPair, signMessage, verifyMessage } = require('./lib/crypto');

module.exports = {
  generateKeyPair,
  signMessage,
  verifyMessage
};
