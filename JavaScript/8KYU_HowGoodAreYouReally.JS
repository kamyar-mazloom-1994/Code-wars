function betterThanAverage(classPoints, yourPoints) {
  if (
    yourPoints >
    classPoints.reduce((total, a) => total + a, 0) / classPoints.length
  ) {
    return true;
  }
  return false;
}
