// routes/video.routes.js
const express = require('express');
const router = express.Router();
const Video = require('../models/Video');

// Obtener todos los videos
router.get('/', async (req, res) => {
  try {
    const videos = await Video.findAll();
    res.json(videos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener videos', error });
  }
});

// Crear un nuevo video
router.post('/', async (req, res) => {
  try {
    const nuevoVideo = await Video.create(req.body);
    res.status(201).json(nuevoVideo);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear video', error });
  }
});

module.exports = router;
