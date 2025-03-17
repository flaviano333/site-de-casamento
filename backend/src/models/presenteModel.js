const connection = require('../config/db.js');

const getAllPresentes = (callback) => {
  connection.query('SELECT * FROM presente', (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};

module.exports = { getAllPresentes };