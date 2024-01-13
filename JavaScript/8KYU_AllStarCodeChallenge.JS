function strCount(str, letter) {
  let array = str.split("");
  let answer = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] === letter) {
      answer += 1;
    }
  }
  return answer;
}
