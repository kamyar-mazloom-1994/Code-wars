function doubleChar(str) {
  let array1 = str.split("");
  let array2 = [];
  for (i = 0; i < array1.length; i++) {
    array2.push(array1[i]);
    array2.push(array1[i]);
  }
  return array2.join("");
}
