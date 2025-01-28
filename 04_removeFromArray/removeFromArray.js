const removeFromArray = function (array, executeNum) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === executeNum) {
      array.splice(i, 1);
      return array;
    } else {
    }
  }
};

// Do not edit below this line
module.exports = removeFromArray;
