// write a program for square of array elemet 

const number = [1,2,3,4,5,6]

let result = number.map((curElem)=> curElem * curElem)
console.log(result)

//! Using Map Method ,write a fucntion that an array of string and return a new array where each string is capitalized


const word = ["apple","bananan","grapes","orange"]

const result2 = word.map((curElem)=>{
    return curElem.toUpperCase();

})
console.log(result2);

//! using map method,write a function that takes an array of numbers and return the square of element but only the even number

const numbers1= [1,2,3,4,5,6,7,8,9,10]

const result3 = numbers1.map((curElem)=>{
    if(curElem %2 ==0){
        return curElem*curElem;
    }
}).filter((curElem)=> curElem!== undefined)

console.log(result3)