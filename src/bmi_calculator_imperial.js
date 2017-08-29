// # src/bmi_calculator_imperial.js

function BMICalculator_imperial() {
};

BMICalculator_imperial.prototype.imperial_bmi = function(obj) {
  var weight_st = obj.weight_st;
  var weight_lb = obj.weight_lb;
  var height_f = obj.height_f;
  var height_i = obj.height_i;
  if (weight_st > 0 && weight_lb > 0 && height_f > 0 && height_i > 0) {
    var lbs = ((weight_st * 14) + weight_lb) * 703;
    var inches = height_f * 12 + height_i;
    var finalBmi = lbs / (inches * inches);
    obj.bmiValue = parseFloat(finalBmi.toFixed(2));
  }

  function setBMIMessage (obj) {
    if (obj.bmiValue < 18.5) {
      obj.bmiMessage = "Underweight"
    }
    if (obj.bmiValue > 18.5 && obj.bmiValue < 25) {
      obj.bmiMessage = "Normal"
    }
    if (obj.bmiValue > 25 && obj.bmiValue < 30) {
      obj.bmiMessage = "Overweight"
    }
    if (obj.bmiValue > 30) {
      obj.bmiMessage = "Obese"
    }
  }
}
