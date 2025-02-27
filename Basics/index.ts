
//if we want to create a sum funcition in  js 

/*

it work proper but we send sum("hello",20) it will also work but we want to restrict the type of a and b
that is why we use typescript;

*/

const sum = (a:number,b:number):number =>{
    return(a+b);
}

console.log(sum(10,20));
//console.log(sum("hello",20)); //error 

// what is tscofing 
// it is a concept of type checking in typescript it provide many seeting to us to handel the typescript code 
// we can set the tsconfig file using tsc --init command
// it will create a tsconfig.json file in our project
