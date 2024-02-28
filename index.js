// Implement a function called saturdayFun
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

// Implement a function called mondayWork
function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

// Implement a function called wrapAdjective
function wrapAdjective(flair = "*") {
  return function (adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
  };
}

// Sample calls to test the functions
console.log(saturdayFun()); // This Saturday, I want to roller-skate!
console.log(mondayWork()); // This Monday, I will go to the office.
console.log(wrapAdjective("%")("a dedicated programmer")); // You are %a dedicated programmer%!
