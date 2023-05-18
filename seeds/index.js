const sequelize = require('../config/connection');
const seedWorkoutData = require('./workoutData');
const seedMuscleGroupData = require('./muscleGroupData');
const seedReviewData = require('./reviewData');
const seedBmiData = require('./bmi');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    await seedMuscleGroupData();
    await seedWorkoutData();
    await seedReviewData();
    await seedBmiData();
    process.exit(0);
};

seedAll();