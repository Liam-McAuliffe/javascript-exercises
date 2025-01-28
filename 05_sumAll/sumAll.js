const sumAll = function (numStart, numEnd) {
  let nums = [numStart];
  let total = numEnd
  for (let i = 0; nums[i] !== numEnd; i++) {
    nums.push(nums[i] + 1);
    total = total + nums[i]
  }
  return total
};

// Do not edit below this line
module.exports = sumAll;
