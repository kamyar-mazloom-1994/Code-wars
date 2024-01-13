function bmi(weight, height) {
  let value = weight / (height * height);
  if (value <= 18.5) {
    return "Underweight";
  } else if (18.5 < value && value <= 25) {
    return "Normal";
  } else if (25 < value && value <= 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}
