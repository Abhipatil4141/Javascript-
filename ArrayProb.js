//? Write a program to multipy each element with 2

const number = [1,2,3,4,5,6];

number.forEach((curElem,index,arr)=>{
    console.log(curElem *2)
})

//! using map function 

const doubleNumber = number.map((CurlElem)=>{
    return CurlElem*2
})

console.log(doubleNumber)