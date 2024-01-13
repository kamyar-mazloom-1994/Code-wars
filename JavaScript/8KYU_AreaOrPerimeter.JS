const areaOrPerimeter = function (l, w) {
  if (w !== l) {
    return 2 * l + 2 * w;
  } else {
    return w * l;
  }
};
