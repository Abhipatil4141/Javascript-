5+25 ;
//? 5-> operand
//? + -> operator
//? 25 -> operand

//! Types of Operator 
//? Arithmatic operator -> + ,- ,* ,/ and %(modulus)
//? Comparsion operator -> == ,=== ,!=,> ,< return true or false
//? Logical operator --> && AND ||OR ,!
//? String operator  --> concetenate the string 
//? Tenary operator --> ? , :
//? Unary operator
//? Type operator


//? var result = "abhi"/2;
//? console.log(result); //!Output :NaN

//? console.log(5>=10);


//! what is the diffrence between == and === operator in Javascript

//? The equality == operator is acomparison operator that compare two values and return true If they are equal
//? the Strict equality === operator is also a comparation operator but it compare two values and return true Only if they are equal and of same type

let num1 = 1;
let num2 ="1";

if(num1 === num2){
    console.log("equal");
}else{
    console.log("Not Equal")
}

// tenary operator 
let age = 18;
let result = age>=18 ? "yes" :"No"
console.log(result)

console.log(2<12<5)  //!output : True (left to right evaluted 2<12is true(1)and 1<5 is true)
console.log( "20"+10+10); //!output : 201010