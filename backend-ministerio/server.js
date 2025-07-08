const { sequelize } = require('./models/db');
const express = require('express');
const cors = require('cors');
const Video = require('./models/Video');

const devocionalesRoutes = require('./routes/devocionalRoutes');
const testimoniosRoutes = require('./routes/testimonioRoutes');
const musicaRoutes = require('./routes/musicaRoutes');
const videoRoutes = require('./routes/videoRoutes');
const donacionesRoutes = require('./routes/donacionesRoutes')


const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/devocionales', devocionalesRoutes);
app.use('/api/testimonios', testimoniosRoutes);
app.use('/api/musica', musicaRoutes);
app.use('/api/videos', videoRoutes);
app.use('/api/donaciones', donacionesRoutes)

app.use('/uploads', express.static('uploads'));

const PORT = 3000;

sequelize.sync().then(() => {
  console.log('Base de datos sincronizada');
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
  });
}).catch(error => {
  console.error('Error al sincronizar base de datos:', error);
});
