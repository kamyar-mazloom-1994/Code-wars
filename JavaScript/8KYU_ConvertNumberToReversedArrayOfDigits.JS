function digitize(n) {
  let array = n.toString().split("").reverse();
  return array.map((x) => parseInt(x));
}
