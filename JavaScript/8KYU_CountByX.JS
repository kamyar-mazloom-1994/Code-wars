function countBy(x, n) {
  let array = [];
  for (i = 1; i < n + 1; i++) {
    array.push(x * i);
  }
  return array;
}
