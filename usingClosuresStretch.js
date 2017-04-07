var wrapLog = function (callback, name) {
  /* your code here */
  return function() {
    var outputString = name + "(";
    outputString += arguments[0] + "," + arguments[1] + ") => "
    outputString+= callback(arguments[0],arguments[1]);
    console.log(outputString);
  }

};

var sum = function (a,b) {
  return a + b;
};

var logSum = wrapLog(sum, "sum");

logSum(5,3); // sum(5,3) => 8
logSum(3,2); // sum(3,2) => 5
