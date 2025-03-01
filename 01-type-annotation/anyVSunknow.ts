// any is nothing but complete stop the TS but in unknow atleast we have power to check the type and perform operation according them 

let myFevNumber1:any = 16;
myFevNumber1="hello"
//it complete ohk with any type 

let Myage:unknown;
myAge=19
if(typeof Myage == "number"){
    console.log("hello i am number value");
}

const fetchData = async (): Promise<unknown> => {
   const responce =  await fetch('https://dummyjson.com/recipes');
   const data = await responce.json()
   return data;
}

 const addData = async() =>{
    let response = await fetchData(); 
    if (response && Array.isArray(response.recipes)) { 
        response.recipes.forEach((ele) => { 
            console.log(ele); 
        });
    } else {
        console.error("Data format is incorrect", response);
    }
 }
