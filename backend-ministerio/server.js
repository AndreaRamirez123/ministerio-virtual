const express = require('express');
const cors = require('cors');
const app = express();

const devocionalesRoutes = require('./routes/devocionalRoutes');
const testimoniosRoutes = require('./routes/testimonioRoutes');

app.use(cors());
app.use(express.json());

app.use('/api/devocionales', devocionalesRoutes);
app.use('/api/testimonios', testimoniosRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
