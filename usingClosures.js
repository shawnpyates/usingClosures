// // EXERCISE 1 - Loaded Die

function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  /* your code here */
  var index = -1;

  return function() {
    index++;
    return list[index];
    /* your code here */
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6


// EXERCISE 2 - Countdown

var countdownGenerator = function (x) {
  /* your code here */
  return function() {
    var announcement = "";
    if (x > 0) {
      announcement += "T-minus " + x + "...";
    }
    else if (x === 0) {
      announcement += "Blast Off!";
    }
    else {
      announcement += "Rocket's already gone, bub!";
    }
    x--;
    console.log(announcement);
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rocket's already gone, bub!
countdown(); // Rocket's already gone, bub!