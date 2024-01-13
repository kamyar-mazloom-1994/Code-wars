function getAverage(marks) {
  return Math.floor(marks.reduce((total, a) => total + a, 0) / marks.length);
}
