//! Let And Const 

//? Let Keyword : The let keyword is used to declare the variable with block scope
//? they are mutable ,meaning their values can be reassigned  


//? Const Keyword: The const keyword is used to declared variable with block scope
//? But once a value is assigned to a const variable ,it cannot be reassigned.const variable are immutable


//! Template string(`${}`) 
let firstName = "Abhi";
let lastName = "patil";

let fullName = `${firstName}${lastName}`;
console.log(fullName)

//! string Interpolation(${})
let age =  21;

let messgae = `I am ${age} year old`;
console.log(messgae)

//? Practise

for(let i=1;i<=5;i++){
    console.log(`5*${i}=${5*i}`);
}


//! DEFAULT PARAMETER

function sum(a,b=10){  //this is default parameter
    return a+b;
}

//? console.log(sum(10,))---->output will NAN 
// console.log(sum(10,56))

//* Fat Arrow Function

const numberSum = (a,b)=>{
    let result = `The sum of ${a} and ${b} is ${a+b}`
    console.log(result);
}

numberSum(10,10);