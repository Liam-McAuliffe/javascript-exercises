const findTheOldest = function (people) {
  let ages = [];
  for (i = 0; i < people.length; i++) {
    let birthYear = people[i].yearOfBirth;
    let deathYear = people[i].yearOfDeath;
    if (deathYear == undefined) {
      let date = new Date();
      deathYear = date.getFullYear();
    }
    let age = deathYear - birthYear;
    ages.push(age);
  }
  let oldest = Math.max(...ages);
  index = ages.indexOf(oldest);
  return people[index];
};

// Do not edit below this line
module.exports = findTheOldest;
