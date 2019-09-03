const Sequelize = require('sequelize');
const sequelize = require('../components/database.js');

const Model = Sequelize.Model;

class Task extends Model {}

Task.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  duration: {
    type: Sequelize.INTEGER,
  },
  avg_power: {
    type: Sequelize.INTEGER,
  },
  timestamp: {
    type: Sequelize.DATE,
  },
  cost: {
    type: Sequelize.FLOAT,
  },
  user: {
    type: Sequelize.INTEGER
  },
  payed: {
    type: Sequelize.BOOLEAN,
  }
}, {sequelize});

Task.sync({
});

module.exports = Task;
