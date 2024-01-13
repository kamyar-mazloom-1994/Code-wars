function smash(words) {
  let sentence = "";
  for (i = 0; i < words.length; i++) {
    sentence += words[i] + " ";
  }
  return sentence.substring(0, sentence.length - 1);
}
