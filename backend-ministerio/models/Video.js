const { DataTypes } = require('sequelize');
const { sequelize } = require('./db');

const Video = sequelize.define('Video', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: false, 
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = Video;
