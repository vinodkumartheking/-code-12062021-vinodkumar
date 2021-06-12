function calculateBMIvalue(height, weight) {
  let _resArr = [];

  height = parseFloat(height).toFixed(2);
  weight = parseFloat(weight).toFixed(2);
  let bmiIndex = parseFloat(weight / Math.pow(height/100, 2)).toFixed(2);
  _resArr.push(bmiIndex);
  _resArr.push(getRiskvalue(parseFloat(bmiIndex).toFixed(1)));
  return _resArr;
}

function getRiskvalue(bmiIndex) {
 if(!(parseInt(bmiIndex))){return "Not a valid Number"}
 if(bmiIndex<=0){return "Equal to zero or -ve number"}
 
  let _riskValue
  if(bmiIndex<=18.4){_riskValue = "Underweight"}
  if(bmiIndex>18.4 && bmiIndex < 25 ){_riskValue = "Normal weight"}
  if(bmiIndex>25 && bmiIndex < 30 ){_riskValue = "Overweigth"}
  if(bmiIndex>30 && bmiIndex < 35 ){_riskValue = "Moderate obese"}
  if(bmiIndex>35 && bmiIndex < 40 ){_riskValue = "Severely obese"}
  if(bmiIndex>40 && bmiIndex<100){_riskValue = "Very Severely obese"}

  if(_riskValue){return _riskValue}

  return "Out of Range";
  
}

module.exports = {calculateBMIvalue,getRiskvalue};
