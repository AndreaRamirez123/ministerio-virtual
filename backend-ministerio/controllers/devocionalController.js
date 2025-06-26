const Devocional = require('../models/Devocional');

exports.obtenerDevocionales = (req, res) => {
  Devocional.getAll((err, results) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al obtener devocionales' });
    }
    res.json(results);
  });
};

exports.crearDevocional = (req, res) => {
  const nuevoDevocional = req.body;
  Devocional.create(nuevoDevocional, (err, resultado) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al crear devocional' });
    }
    res.status(201).json({ mensaje: 'Devocional creado exitosamente', id: resultado.insertId });
  });
};
