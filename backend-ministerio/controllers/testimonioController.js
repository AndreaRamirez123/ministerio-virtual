const Testimonio = require('../models/Testimonio');

exports.obtenerTestimonios = (req, res) => {
  Testimonio.getAll((err, results) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al obtener testimonios' });
    }
    res.json(results);
  });
};

exports.crearTestimonio = (req, res) => {
  const nuevoTestimonio = req.body;
  Testimonio.create(nuevoTestimonio, (err, resultado) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al crear testimonio' });
    }
    res.status(201).json({ mensaje: 'Testimonio creado exitosamente', id: resultado.insertId });
  });
};
