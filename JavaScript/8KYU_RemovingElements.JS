function removeEveryOther(arr) {
  let array = [];
  for (i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      array.push(arr[i]);
    }
  }
  return array;
}
