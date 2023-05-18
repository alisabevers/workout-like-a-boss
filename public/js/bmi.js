
const bmi = require('bmi');
// bmi(weight, height); // => (result)
bmi(100, 5.7); // => (3.077870113881194)

  const heightValue = document.getElementById('height').value.trim();
  console.log(heightValue);
  const weightValue = document.getElementById('weight').value.trim();
  console.log(weightValue);
  const answerValue = document.getElementById('result').value.trim();
  console.log(bmi(100, 5.7))
   const post  = async () => {
     
      const response = await fetch('/', {
         method: 'POST',
        body: JSON.stringify({answerValue}),
         headers: { 'Content-Type': 'application/json' },
       });

      