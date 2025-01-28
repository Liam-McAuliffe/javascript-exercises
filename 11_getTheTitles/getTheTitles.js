const getTheTitles = function (array) {
  let bookTitles = [];
  for (let i = 0; i < array.length; i++) {
    bookTitles.push(array[i].title);
  }
  return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
