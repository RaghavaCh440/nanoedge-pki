const crypto = require('crypto');

function generateKeyPair() {
  const { publicKey, privateKey } = crypto.generateKeyPairSync('ec', {
    namedCurve: 'secp256k1',
    publicKeyEncoding: { type: 'spki', format: 'pem' },
    privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
  });
  return { publicKey, privateKey };
}

function signMessage(message, privateKey) {
  const sign = crypto.createSign('SHA256');
  sign.update(message);
  sign.end();
  return sign.sign(privateKey, 'base64');
}

function verifyMessage(message, signature, publicKey) {
  const verify = crypto.createVerify('SHA256');
  verify.update(message);
  verify.end();
  return verify.verify(publicKey, signature, 'base64');
}

module.exports = {
  generateKeyPair,
  signMessage,
  verifyMessage
};
