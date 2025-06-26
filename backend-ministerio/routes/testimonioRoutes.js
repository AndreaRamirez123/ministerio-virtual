const express = require('express');
const router = express.Router();
const db = require('../models/db');

router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM testimonios WHERE aprobado = 1 ORDER BY id DESC');
    res.json(rows);
  } catch (error) {
    console.error('Error al obtener testimonios:', error);
    res.status(500).json({ message: 'Error al obtener testimonios' });
  }
});

router.post('/', async (req, res) => {
  const { nombre_persona, email, testimonio } = req.body;
  const fecha_envio = new Date();
  const aprobado = 1;

  try {
    const [result] = await db.query(
      'INSERT INTO testimonios (nombre_persona, email, testimonio, fecha_envio, aprobado) VALUES (?, ?, ?, ?, ?)',
      [nombre_persona, email, testimonio, fecha_envio, aprobado]
    );
    res.status(201).json({ message: 'Testimonio guardado exitosamente', id: result.insertId });
  } catch (error) {
    console.error('❌ Error al guardar testimonio:', error);
    res.status(500).json({ message: 'Error al guardar el testimonio' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await db.query('DELETE FROM testimonios WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ mensaje: 'Testimonio no encontrado' });
    }
    res.json({ mensaje: 'Testimonio eliminado correctamente' });
  } catch (error) {
    console.error('❌ Error al eliminar testimonio:', error);
    res.status(500).json({ mensaje: 'Error al eliminar testimonio' });
  }
});


module.exports = router;


