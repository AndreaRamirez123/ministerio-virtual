const express = require('express');
const router = express.Router();
const db = require('../models/db');

router.get('/todos', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM devocionales');
    res.json(rows);
  } catch (e) {
    console.error('Error al obtener todos los devocionales:', e);
    res.status(500).json({ mensaje: 'Error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM devocionales ORDER BY fecha_programada DESC');
    res.json(rows);
  } catch (e) {
    console.error('❌ Error al obtener devocionales:', e);
    res.status(500).json({ mensaje: 'Error al obtener devocionales' });
  }
});


router.get('/hoy', async (req, res) => {
  try {
    const hoy = new Date().toLocaleDateString('en-CA');
    const [rows] = await db.query('SELECT * FROM devocionales WHERE fecha_programada = ?', [hoy]);
    res.json(rows);
  } catch (error) {
    console.error('❌ Error al obtener devocionales del día:', error);
    res.status(500).json({ mensaje: 'Error al obtener devocionales del día' });
  }
});


// POST - Agregar devocional
router.post('/', async (req, res) => {
  try {
    const { titulo, cita_biblica, reflexion, oracion, fecha_programada } = req.body;
    const [result] = await db.query(
      'INSERT INTO devocionales (titulo, cita_biblica, reflexion, oracion, fecha_programada) VALUES (?, ?, ?, ?, ?)',
      [titulo, cita_biblica, reflexion, oracion, fecha_programada]
    );
    res.status(201).json({ message: 'Devocional guardado', id: result.insertId });
  } catch (error) {
    console.error('❌ Error al guardar devocional:', error);
    res.status(500).json({ mensaje: 'Error al guardar devocional' });
  }
});



// PUT - Actualizar devocional
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { titulo, cita_biblica, reflexion, oracion, fecha_programada } = req.body;

  try {
    await db.query(
      'UPDATE devocionales SET titulo = ?, cita_biblica = ?, reflexion = ?, oracion = ?, fecha_programada = ? WHERE id = ?',
      [titulo, cita_biblica, reflexion, oracion, fecha_programada, id]
    );
    res.json({ message: 'Devocional actualizado correctamente' });
  } catch (error) {
    console.error('Error al actualizar devocional:', error);
    res.status(500).json({ message: 'Error al actualizar devocional' });
  }
});




// ✅ DELETE - Eliminar devocional
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  console.log('Intentando eliminar devocional con ID:', id);

  const sql = 'DELETE FROM devocionales WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Error al eliminar devocional:', err);
      return res.status(500).json({ mensaje: 'Error al eliminar' });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ mensaje: 'Devocional no encontrado' });
    }

    console.log('Devocional eliminado con éxito');
    res.status(200).json({ mensaje: 'Devocional eliminado con éxito' });
  });
});

// ❤️ Aumentar "me gusta"
router.put('/:id/like', async (req, res) => {
  try {
    const { id } = req.params;
    await db.execute('UPDATE devocionales SET likes = likes + 1 WHERE id = ?', [id]);
    res.json({ message: 'Like agregado correctamente' });
  } catch (error) {
    console.error('Error al aumentar likes:', error);
    res.status(500).json({ message: 'Error al aumentar likes' });
  }
});

// Quitar like
router.put('/:id/quitar-like', async (req, res) => {
  const { id } = req.params;

  try {
    await db.execute('UPDATE devocionales SET likes = GREATEST(likes - 1, 0) WHERE id = ?', [id]);
    res.json({ message: 'Like eliminado correctamente' });
  } catch (error) {
    console.error('Error al quitar like:', error);
    res.status(500).json({ message: 'Error al quitar like' });
  }
});


module.exports = router;


