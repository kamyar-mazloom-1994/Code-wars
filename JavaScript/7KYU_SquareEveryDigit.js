function squareDigits(num) {
  let array = num.toString().split("");
  for (i = 0; i < array.length; i++) {
    array[i] = array[i] * array[i];
  }
  return parseInt(array.join(""));
}
