//preload variable: dict

var makeBackronym = function (string) {
  let array = string.toUpperCase().split("");
  let array2 = [];
  for (i = 0; i < array.length; i++) {
    array2.push(dict[array[i]]);
  }
  return array2.join(" ");
};
