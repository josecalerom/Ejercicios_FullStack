const crypto = require('crypto');

const cryptoKeys = Object.keys(crypto);
console.log("Crypto methods: ", cryptoKeys);

const randomID = crypto.randomBytes(16).toString('hex');
console.log("Random ID: ", randomID);