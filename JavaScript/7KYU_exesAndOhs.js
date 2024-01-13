// Check to see if a string has the same amount of 'x's and 'o's. The
// method must return a boolean and be case insensitive. The string
// can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  let array = str.toLowerCase().split("");
  let numOfO = 0;
  let numOfX = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] === "o") {
      numOfO += 1;
    } else if (array[i] === "x") {
      numOfX += 1;
    }
  }
  if (numOfO === numOfX) {
    return true;
  }
  return false;
}

console.log(XO("oooOXXxxmmM"));
