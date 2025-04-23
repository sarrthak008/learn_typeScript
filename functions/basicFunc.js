/// basic function thats greet the new user ....
// in ts we want to add parameter type as well as return type of a function ...
function greeting(userName, id) {
    console.log("hello ".concat(userName, " darling, your id is ").concat(id));
}
greeting("sarthak", Math.floor(Math.random() * 99));
// arrow functions
var greettingUser = function (userName, id) {
    console.log("hello ".concat(userName, " darling, your id is ").concat(id));
};
greettingUser("sarthak", Math.floor(Math.random() * 99));
// create a function that sun two numbers and return it 
var sum = function (a, b) {
    return a + b;
};
console.log(sum(12, 12));
// create a function thats check the give string is pelindrom or not
var isPelindrome = function (str) {
    var revStr = str.split("").reverse().join("");
    return revStr === str ? true : false;
};
console.log(isPelindrome("12321"));
/// find the  avg numbers  of an array elements
var avgOfArray = function (arr) {
    var avg = arr.reduce(function (sum, cuurentVal) { return sum + cuurentVal; }) / arr.length;
    return avg;
};
console.log(avgOfArray([1, 2, 3, 4, 5]));
// find the maximun value of an array
var maxVal = function (arr) {
    var maxval = arr[0];
    arr.forEach(function (val) {
        if (maxval < val) {
            maxval = val;
        }
    });
    return maxval;
};
console.log(maxVal([12, 2, 2, 4, 5]));
function greet(name, id) {
    console.log("welcome ".concat(name, " your id is ").concat(id));
}
greet("sarthak", 1);
