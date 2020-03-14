const fs = require('fs');
require('dotenv').config();

const privateKey = fs.readFileSync('keys/private.key');
const publicKey = fs.readFileSync('keys/public.key');

const { PORT, DB_HOST, DB_NAME } = process.env;

const config = {
  port: PORT,
  host: DB_HOST,
  dbName: DB_NAME,
  jwtSecret: {
    privKey: privateKey,
    pubKey: publicKey,
  },
};

module.exports = config;
