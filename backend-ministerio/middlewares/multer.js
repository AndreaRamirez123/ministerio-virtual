const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Crea la carpeta si no existe
const musicFolder = path.join(__dirname, '..', 'uploads', 'musica');
if (!fs.existsSync(musicFolder)) {
  fs.mkdirSync(musicFolder, { recursive: true });
}

// Configuración de Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, musicFolder);
  },
  filename: function (req, file, cb) {
    const nombreUnico = Date.now() + '-' + file.originalname;
    cb(null, nombreUnico);
  }
});

const upload = multer({ storage });

module.exports = upload;
