// An isogram is a word that has no repeating letters, consecutive or
// non-consecutive. Implement a function that determines whether a
// string that contains only letters is an isogram. Assume the empty
// string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str) {
  array = str.toLowerCase().split("");
  sum = 0;
  for (i = 0; i < array.length; i++) {
    for (j = 0; j < array.length; j++) {
      if (array[i] === array[j]) {
        sum += 1;
      }
      sum += 0;
    }
  }
  if (sum > array.length) {
    return false;
  }
  return true;
}

console.log(isIsogram("young money"));
