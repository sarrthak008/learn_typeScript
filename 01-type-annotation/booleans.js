//boolean data include only two values either true or false 
var isValidUser = true;
var itHasLoginToken = false;
var myNumber = 10;
var isEven = function (num) {
    return num % 2 === 0 ? true : false;
};
console.log(isEven(myNumber));
//write a program to check number is divisible by 4 and 8 ;
var isDivisibleBy4and8 = function (num) {
    return num % 4 == 0 && num % 8 == 0 ? true : false;
};
console.log(isDivisibleBy4and8(4));
