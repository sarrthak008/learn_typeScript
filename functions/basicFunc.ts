
/// basic function thats greet the new user ....
// in ts we want to add parameter type as well as return type of a function ...

function greeting(userName:string,id:number):void{
  console.log(`hello ${userName} darling, your id is ${id}`);
}

greeting("sarthak",Math.floor(Math.random()*99));

// arrow functions

const greettingUser = (userName:string,id:number):void=>{
    console.log(`hello ${userName} darling, your id is ${id}`);
}

greettingUser("sarthak",Math.floor(Math.random()*99));

// create a function that sun two numbers and return it 

const sum =(a:number,b:number):number=>{
     return a+b;
}
console.log(sum(12,12));


// create a function thats check the give string is pelindrom or not

const isPelindrome = (str:string):boolean =>{
    const revStr = str.split("").reverse().join("");
     return revStr === str ? true : false;
}


console.log(isPelindrome("12321"))

/// find the  avg numbers  of an array elements

const avgOfArray = (arr:number[]):number =>{
     let avg = arr.reduce((sum,cuurentVal)=>sum+cuurentVal) / arr.length
     return avg
}

console.log(avgOfArray([1,2,3,4,5]))

// find the maximun value of an array

const maxVal =  (arr:number[]):number=>{
   let  maxval:number = arr[0];
   arr.forEach(val => {
       if(maxval <  val){
        maxval = val
       }
    });
 return maxval;
}


console.log(maxVal([12,2,2,4,5]))


function greet(name:string ,id:number):void{
      console.log(`welcome ${name} your id is ${id}`)
}

greet("sarthak",1)