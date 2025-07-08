const { DataTypes } = require('sequelize');
const { sequelize } = require('./db');

const Donacion = sequelize.define('Donacion', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  categoria: {
    type: DataTypes.STRING,
    allowNull: false
  },
  mensaje: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  direccion: {
    type:DataTypes.STRING,
    allowNull: true
  },
  medioPago: {
    type:DataTypes.STRING,
    allowNull: true
  }

});

module.exports = Donacion;
