const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const musicaController = require('../controllers/musicaController');

// Configurar almacenamiento con Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/musica');
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  }
});

const upload = multer({ storage: storage });

// Ruta para obtener música
router.get('/', musicaController.obtenerMusica);

// Ruta para subir una nueva canción
router.post('/', upload.single('archivo'), musicaController.crearMusica);

router.post('/me-gusta', musicaController.darMeGusta);
router.delete('/me-gusta', musicaController.quitarMeGusta);


module.exports = router;
