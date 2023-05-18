const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class BodyMass extends Model{}

BodyMass.init(
{
    id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
   },

  bmicontent: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
},
{
  sequelize,
  freezeTableName: true,
  underscored: true,
  modelName: 'bmi',
}
);

module.exports = BodyMass;

