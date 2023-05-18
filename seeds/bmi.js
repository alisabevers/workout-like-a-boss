const { BodyMass } = require('../models');

const bmiData = [
  {
    bmicontent: '',
  }
];

const seedBmiData = () => BodyMass.bulkCreate(bmiData)

module.exports = seedBmiData