function positiveSum(arr) {
  let positiveSum = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      positiveSum += 0;
    } else {
      positiveSum += arr[i];
    }
  }
  return positiveSum;
}
