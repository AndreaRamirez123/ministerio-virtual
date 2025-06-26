const db = require('./db');

const Devocional = {
  getAll: (callback) => {
    const query = 'SELECT * FROM devocionales ORDER BY fecha_publicacion DESC';
    db.query(query, callback);
  },

  create: (nuevoDevocional, callback) => {
    const query = 'INSERT INTO devocionales SET ?';
    db.query(query, nuevoDevocional, callback);
  }
};

module.exports = Devocional;
