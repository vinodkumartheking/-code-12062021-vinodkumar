function calculateBMIvalue(height, weight) {
  let _resArr = [];

  height = parseFloat(height).toFixed(2);
  weight = parseFloat(height).toFixed(2);
  let bmiIndex = parseFloat(height / Math.pow(weight, 2).toFixed(2));
  _resArr.push(bmiIndex);
  _resArr.push(getRiskvalue(parseFloat(bmiIndex).toFixed(1)));
  return _resArr;
}

function getRiskvalue(bmiIndex) {
 
  let _riskValue
  if(bmiIndex<=18.4){_riskValue = "Underweight"}
  if(bmiIndex>18.4 && bmiIndex < 25 ){_riskValue = "Normal weight"}
  if(bmiIndex>25 && bmiIndex < 30 ){_riskValue = "Overweigth"}
  if(bmiIndex>30 && bmiIndex < 35 ){_riskValue = "Moderate obese"}
  if(bmiIndex>35 && bmiIndex < 40 ){_riskValue = "Severely obese"}
  if(bmiIndex>40){_riskValue = "Very Severely obese"}

  if(_riskValue){return _riskValue}

  return "Out of Range";
  /*
   let _riskLookupVal = {
    18.5: "Underweight",
    25: "Normal",
    30: "Overweigth",
    35: "Severely obese",
    40: "Very Severely obese",
  };
  for (let [bmi, risk] of Object.entries(_riskLookupVal)) {
      if(bmiIndex<=bmi){
          return '${risk}'
      }
    console.log(`${bmi}: ${risk}`);
  }
  */

  
}

module.exports = calculateBMIvalue;
