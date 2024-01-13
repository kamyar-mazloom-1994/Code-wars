function find_average(array) {
  if (array.length === 0) {
    return 0;
  }
  return array.reduce((total, a) => total + a, 0) / array.length;
}
