function arrayPlusArray(arr1, arr2) {
  return (
    arr1.reduce((total, a) => total + a, 0) +
    arr2.reduce((total, a) => total + a, 0)
  );
}
