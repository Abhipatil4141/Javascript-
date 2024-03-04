//! Function in javascript

//? in a javascript a function is a block of reusable code that perform a specific task or set of task 
//? used to organisze code into modular and manageble pieces,promote code reuse and make more readble.


// lets make a reuseble code for sum the number

function sum(a,b){
    return a+b;
}

console.log(sum(5,15))
console.log(sum(5,555))

// function for greet the clg 

function greet (name){
    console.log("Hello " + name + " ,Welcome to GDSC RIT")
}

greet('Abhi');
greet('prashant');



//? function expression -->combinaton of varible and function

var result = function multi(a,b){
    console.log(a*b)
}

result(5,4)

//! Anonymous Function
// a function is without name

var number = function(a,b){
    console.log(a-b)
}

number(58,9)