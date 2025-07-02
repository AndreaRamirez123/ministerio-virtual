const { MeGusta } = require('../models/db');
const Musica = require('../models/Musica');


const obtenerMusica = async (req, res) => {
  try {
    const canciones = await Musica.findAll();
    res.json(canciones);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener música', error });
  }
};

const crearMusica = async (req, res) => {
  try {

    console.log("Archivo recibido:", req.file);
    console.log("Body:", req.body);

    const archivo = req.file;
    const { titulo, artista, genero, descripcion } = req.body;

    if (!archivo) {
      return res.status(400).json({ mensaje: 'Archivo no enviado' });
    }

    const nueva = await Musica.create({
      titulo,
      artista,
      genero,
      descripcion,
      url: `/uploads/musica/${archivo.filename}`,
      tipo: archivo.mimetype,
      fecha_publicacion: new Date()
    });

    res.status(201).json(nueva);
  } catch (error) {
    console.error('🔥 ERROR AL GUARDAR LA MÚSICA:', error);
    res.status(500).json({ mensaje: 'Error al guardar música', error: error.message });

  }
};

const darMeGusta = async (req, res) => {
  const { usuario_id, musica_id } = req.body;

  if (!usuario_id || !musica_id) {
    return res.status(400).json({ error: 'Faltan datos: usuario_id y musica_id son requeridos' });
  }

  try {
    // Aquí puedes registrar el me gusta en una tabla, por ejemplo
    console.log(`👍 Usuario ${usuario_id} dio me gusta a canción ${musica_id}`);
    res.status(200).json({ mensaje: 'Me gusta registrado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar me gusta', detalle: error });
  }
};

const quitarMeGusta = async (req, res) => {
  const { usuario_id, musica_id } = req.body;

  if (!usuario_id || !musica_id) {
    return res.status(400).json({ error: 'Faltan datos: usuario_id y musica_id son requeridos' });
  }

  try {
    // Aquí puedes quitar el registro del me gusta
    console.log(`👎 Usuario ${usuario_id} quitó me gusta a canción ${musica_id}`);
    res.status(200).json({ mensaje: 'Me gusta eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al quitar me gusta', detalle: error });
  }
};




module.exports = {
  obtenerMusica,
  crearMusica,
  darMeGusta,
  quitarMeGusta
};
