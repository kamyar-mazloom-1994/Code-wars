// A Narcissistic Number is a number of length n in which the sum of
// its digits to the power of n is equal to the original number. If
// this seems confusing, refer to the example below.

// Ex: 153, where n = 3 (number of digits in 153)
// 13 + 53 + 33 = 153

// Write a method is_narcissistic(i) (in Haskell: isNarcissistic ::
// Integer -> Bool) which returns whether or not i is a Narcissistic
// Number.

const isNarcissistic = (num) => {
  let m = 1,
    count = 0;
  while (num / m > 1) {
    m *= 10;
    count++;
  }
  let sum = 0,
    temp = num;
  while (temp) {
    sum += Math.pow(temp % 10, count);
    temp = Math.floor(temp / 10);
  }
  return sum === num;
};

console.log(isNarcissistic(153));
