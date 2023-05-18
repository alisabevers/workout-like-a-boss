const router = require('express').Router();
const review = require('./api/reviewRoutes')
const pages = require('./pages');
const BodyMass = require('./api/bmiRoute')
// localhost:3001/
router.use('/', pages);

// localhost:3001/api
router.use('/api', review);
router.use('/bmiroute', BodyMass);
module.exports = router;
