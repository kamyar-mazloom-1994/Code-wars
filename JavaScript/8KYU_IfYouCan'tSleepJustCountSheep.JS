var countSheep = function (num) {
  array = [];
  for (i = 1; i < num + 1; i++) {
    array.push(`${i} sheep...`);
  }
  return array.join("");
};
