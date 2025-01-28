const fibonacci = function (num) {
  if (num == 0) {
    return 0;
  }
  if (num < 0) {
    return "OOPS";
  }

  num = Number(num);
  let fibonacciArr = [1, 1];
  index = num - 1;

  for (i = 1; num > fibonacciArr.length; i++) {
    nextNum = fibonacciArr[i] + fibonacciArr[i - 1];
    fibonacciArr.push(nextNum);
  }
  return fibonacciArr[index];
};

// Do not edit below this line
module.exports = fibonacci;
