const db = require('./models/db');

db.query('SELECT 1 + 1 AS resultado', (err, results) => {
  if (err) {
    console.error('❌ Error en la conexión a la base de datos:', err);
  } else {
    console.log('✅ Conexión exitosa a la base de datos. Resultado:', results[0].resultado);
  }
  process.exit(); // Para cerrar el proceso
});
