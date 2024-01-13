function filter_list(l) {
  let array = [];
  for (i = 0; i < l.length; i++) {
    if (Number.isInteger(l[i]) === true) {
      array.push(l[i]);
    }
  }
  return array;
}
