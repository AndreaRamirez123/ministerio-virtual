const db = require('./db');

const Testimonio = {
  getAll: (callback) => {
    const query = 'SELECT * FROM testimonios ORDER BY fecha DESC';
    db.query(query)
      .then(([rows]) => callback(null, rows))
      .catch((err) => callback(err));
  },

  create: (nuevoTestimonio, callback) => {
    const query = 'INSERT INTO testimonios SET ?';
    db.query(query, [nuevoTestimonio])
      .then(([result]) => callback(null, result))
      .catch((err) => callback(err));
  }
};

module.exports = Testimonio;
