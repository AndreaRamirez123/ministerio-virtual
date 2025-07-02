// models/MeGusta.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('./db');

const MeGusta = sequelize.define('MeGusta', {
  usuario_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  musica_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  tableName: 'me_gusta',
  timestamps: false,
});

module.exports = MeGusta;

