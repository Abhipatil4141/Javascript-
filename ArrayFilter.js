// Search + Filter 
const number = [1,2,1,4,5,2,7,2,3,8]

//! find Method : find the first element in array

//? const result = number.find((curElem)=>{
//     return curElem>5;
// })

// console.log(result)

//!findIndex 
//? const result1 = number.findIndex((curElem)=>{
//     return curElem>2
// })
// console.log(result1)// output is index of element


//!Filter : return the filtered array 
const num = [9,8,7,5,6,4,2,3,5,6,8,4]
const result2 = num.filter((curElem)=>{
    return curElem>6
})
console.log(result2)

// todo delete the specific number in array

let value = 6;

let updatedCart = num.filter((curElem)=>{
    return curElem !==value
})
console.log(updatedCart)
