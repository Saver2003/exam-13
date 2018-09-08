const path = require('path');

const rootPath = __dirname;

module.exports = {
  rootPath,
  uploadPath: path.join(rootPath, '/public/uploads'),
  db: {
    url: 'mongodb://localhost:27017',
    name: 'cw-13'
  },
  jwt: {
    secret: 'very secret string',
    expiresIn: 100
  }
};





