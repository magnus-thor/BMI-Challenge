$(document).ready(function () {
  $('#calculate_metric').click(function () {
    var w = parseFloat($('#weight').val());
    var h = parseFloat($('#height').val());
    var person = new Person({weight: w, height: h});
    person.calculate_bmi();
    $('#display_value').html('Your BMI is ' + person.bmiValue);
    $('#display_message').html('and you are ' + person.bmiMessage);
  });

  $('#calculate_imp').click(function() {
    var w_s = parseFloat($('#weight_st').val());
    var w_l = parseFloat($('#weight_lb').val());
    var h_f = parseFloat($('#height_f').val());
    var h_i = parseFloat($('#height_i').val());
    var person_imp= new Person({weight_st: w_s, weight_lb: w_l, height_f: h_f, height_i: h_i});
    person_imp.calculate_bmi_imp();
    $('#display_value').html('Your BMI is ' + person_imp.bmiValue);
    $('#display_message').html('Your BMI is ' + person_imp.bmiMessage);
  })

});
