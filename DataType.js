//! DataTypes :1) Primitive data types
    //!        2) Object data types


    //! 1) Primitive datatype 
//? [string -> "abhi" 

//? numbers ->1,2,55,4566

//? boolens ->true and false

//? undefined -> represent the absent of value or an uninitialized variable
//? var Name;
//? console.log(Name)
// OP -> Undefined 

//? null-> Represent the absent of value .It is indicated that object and varible has no assighned value
//? var BadMemories = null;
//? console.log(BadMemories);


//?  bigint ->represent the long int value 12254632364646n
//?   Symbol
// ]

//! 2) Object type data type 
//? An Object 
//? An Array
//? A date 


// typeof operator 

let MyName = "Abhi";
console.log(typeof MyName);

//! typeof null are --> Object 

//? convert the string to number 
//? we just need to add the '+' Sign Before the string 

var MyAge = "10";
// console.log(typeof MyAge);
// console.log(typeof +MyAge);
console.log(typeof Number(MyAge));

var Age = +MyAge;
console.log(typeof Age) 

// Number To Sting 
let str = 25;
// console.log(typeof String(str))
console.log(typeof (str + ""))



//! Truthy and falsy values in javascript

//? Truthy -> values are treated as true when used in conditions 
//? true 
//? any Nonempty string ("hello")
//? any Non-zero number (5)
//? Arrays and Object Even if they are not empty

//? falsy value arre treated as false in boolen contexts 
//? false 
//? 0(zero)
//? "" empty string 
//? null 
//? undefined
//? NaN not a number 

