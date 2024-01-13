function divisibleBy(numbers, divisor) {
  let array = [];
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % divisor === 0) {
      array.push(numbers[i]);
    }
  }
  return array;
}
