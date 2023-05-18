const bmi = require('bmi-count');
const { BodyMass } = require('../../models/bmi');
const router = require('./reviewRoutes');

// TWO params route height and weight.
// then feed those 2 parms into the nmp package 
// then take that result from that nmp package
// add it to the data base using the bmi model

router.post('/bmi', async (req,res)=> {
  const {height, weight} = req.body;
  const calculated  = bmi(height,weight) 
  
  const package = await BodyMass.create({
   
    bmiContent: calculated
  })
  res.json(package)
})
module.exports = router