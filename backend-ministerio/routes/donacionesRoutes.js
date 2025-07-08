const express = require('express');
const router = express.Router();
const Donacion = require('../models/Donacion');

// POST
router.post('/', async (req, res) => {
  try {

    console.log('Donación recibida:', req.body);
    
    const nuevaDonacion = await Donacion.create({
      nombre: req.body.nombre,
      email: req.body.email,
      categoria: req.body.categoria,
      mensaje: req.body.mensaje,
      direccion: req.body.direccion,
      medioPago: req.body.medioPago
    });
    res.status(201).json({ mensaje: 'Donación registrada', donacion: nuevaDonacion });
  } catch (error) {
    console.error('Error al guardar donación:', error);
    res.status(500).json({ mensaje: 'Error al registrar la donación' });
  }
});

module.exports = router;
