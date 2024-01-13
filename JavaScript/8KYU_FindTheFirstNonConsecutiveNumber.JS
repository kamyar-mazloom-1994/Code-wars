function firstNonConsecutive(arr) {
  const result = arr.find((element, i) => {
    if (i < 1) {
      return false;
    }
    if (element - arr[i - 1] !== 1) {
      return true;
    }
  });
  if (result !== undefined) {
    return result;
  }
  return null;
}
