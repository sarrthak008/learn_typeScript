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
