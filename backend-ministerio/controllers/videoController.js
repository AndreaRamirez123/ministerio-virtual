// controllers/videoController.js
const Video = require('../models/Video');

exports.obtenerVideos = async (req, res) => {
  try {
    const videos = await Video.findAll({ order: [['fecha_publicacion', 'DESC']] });
    res.json(videos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener videos' });
  }
};

exports.subirVideo = async (req, res) => {
  try {
    const { titulo, descripcion, tipo, url } = req.body;

    const video = await Video.create({ titulo, descripcion, tipo, url });
    res.status(201).json(video);
  } catch (error) {
    res.status(500).json({ error: 'Error al subir el video' });
  }
};
