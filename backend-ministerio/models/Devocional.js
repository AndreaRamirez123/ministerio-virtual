// models/Devocional.js
const db = require('./db'); // este es el pool de mysql2

const Devocional = {
  getAll: (callback) => {
    const query = 'SELECT * FROM devocionales ORDER BY fecha_publicacion DESC';
    db.query(query)
      .then(([rows]) => callback(null, rows))
      .catch((err) => callback(err));
  },

  create: (nuevoDevocional, callback) => {
    const query = 'INSERT INTO devocionales SET ?';
    db.query(query, [nuevoDevocional])
      .then(([result]) => callback(null, result))
      .catch((err) => callback(err));
  }
};

module.exports = Devocional;

