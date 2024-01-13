// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle
// (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

function rowSumOddNumbers(n) {
  let numOfOdds = 0;
  let array = [];

  for (i = n; i > 0; i--) {
    numOfOdds += i;
  }

  for (i = 1; i < numOfOdds + 1; i++) {
    array.push(i * 2 - 1);
  }

  return array.slice(-n).reduceRight((a, b) => a + b);
}

console.log(rowSumOddNumbers(4));
