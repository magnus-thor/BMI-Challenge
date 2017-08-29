 // spec/bmi_calculator_imperial_spec.js

describe("BMICalculator Imperial", function() {
  var calculator;
  var person;

beforeEach(function() {
  person = new Person({weight_st: 14, weight_lb: 2, height_f: 6, height_i: 1});
  calculator = new BMICalculator_imperial();
  });

  it("calculates BMI for a person using imperial method", function() {
    calculator.imperial_bmi(person);
    expect(person.bmiValue).toEqual(26.12)
  });
})
