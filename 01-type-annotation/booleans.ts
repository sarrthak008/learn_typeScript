

//boolean data include only two values either true or false 

let isValidUser:boolean = true;
let itHasLoginToken:boolean = false;

let myNumber:number = 10;

const isEven = (num:number):boolean=>{
    return num%2 === 0 ? true : false;
}

console.log(isEven(myNumber));  

//write a program to check number is divisible by 4 and 8 ;

const isDivisibleBy4and8 = (num:number):boolean =>{
    return num % 4 == 0 && num % 8==0 ? true : false;
}

console.log(isDivisibleBy4and8(4))
