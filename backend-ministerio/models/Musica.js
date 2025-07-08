const { DataTypes } = require('sequelize');
const { sequelize } = require('./db'); 

const Musica = sequelize.define('Musica', {
  titulo: { type: DataTypes.STRING, allowNull: false },
  artista: { type: DataTypes.STRING },
  genero: { type: DataTypes.STRING },
  url: { type: DataTypes.STRING, allowNull: false },
  tipo: { type: DataTypes.STRING },
  descripcion: { type: DataTypes.TEXT },
  fecha_publicacion: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
  tableName: 'musica',
  timestamps: false,
});

module.exports = Musica;


