function fakeBin(x) {
  array = x.split("");
  array1 = [];
  for (i = 0; i < array.length; i++) {
    if (array[i] < 5) {
      array1.push(0);
    } else {
      array1.push(1);
    }
  }
  return array1.join("");
}
