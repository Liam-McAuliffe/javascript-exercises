const palindromes = function (string) {
  string = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  string = string.replaceAll(" ", "");
  string = string.toLowerCase();

  reverseString = string.split("").reverse().join("");
  console.log(string);
  console.log(reverseString);
  if (string == reverseString) {
    return true;
  } else {
    return false;
  }
};

palindromes("A car, a man, a maraca.");

// Do not edit below this line
module.exports = palindromes;
