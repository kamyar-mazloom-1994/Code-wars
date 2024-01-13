function countPositivesSumNegatives(input) {
  let sumOfPositive = 0;
  let sumOfNegative = 0;

  if (input == null || input.length < 1) {
    return [];
  } else {
    input.map((item) => {
      if (item > 0) {
        sumOfPositive++;
      } else if (item < 0) {
        sumOfNegative += item;
      } else {
        return [];
      }
    });
  }
  return [sumOfPositive, sumOfNegative];
}
