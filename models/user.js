const Sequelize = require('sequelize');
const sequelize = require('../components/database.js');

const Model = Sequelize.Model;

class User extends Model {
}

User.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  rfid_id: {
    type: Sequelize.STRING
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  }
}, {sequelize});

User.sync({
  alter:true
});

module.exports = User;
