const { sequelize } = require('./models/db');
const express = require('express');
const cors = require('cors');
const app = express();

const devocionalesRoutes = require('./routes/devocionalRoutes');
const testimoniosRoutes = require('./routes/testimonioRoutes');
const musicaRoutes = require('./routes/musicaRoutes');

app.use(cors());
app.use(express.json());

app.use('/api/devocionales', devocionalesRoutes);
app.use('/api/testimonios', testimoniosRoutes);
app.use('/api/musica', musicaRoutes);
app.use('/uploads', express.static('uploads'))

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

sequelize.sync({ force: false })
  .then(() => console.log("BD sincronizada"))
  .catch(err => console.log("Error al sincronizar", err));
