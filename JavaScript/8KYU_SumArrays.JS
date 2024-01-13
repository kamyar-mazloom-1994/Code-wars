// Sum Numbers
function sum(numbers) {
  if (numbers.length === 0) {
    return 0;
  } else {
    return numbers.reduce((total, a) => total + a, 0);
  }
}
