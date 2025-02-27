//if we want to create a sum funcition in  js 
/*
  const sum =(a,b)=>{
    return a+b;
}
console.log(sum(10,20));

it work proper but we send sum("hello",20) it will also work but we want to restrict the type of a and b
that is why we use typescript;

*/
var sum = function (a, b) {
    return (a + b);
};
console.log(sum(10, 20));
//console.log(sum("hello",20)); //error 
