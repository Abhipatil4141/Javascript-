//! How to insert  replace and delete the data in array 

// push(): add one or more element at the end
// pop() : remove the last element in array
//unshift(): add one or more element at begining of array
//shift(): remove the element at begniner of array
//spilce(start,deleteCount,item):


nnumber = [1,2,3,4,5]
//? nnumber.push(7)  //return new length
// console.log(nnumber)

//? nnumber.pop()
// console.log(nnumber)

//? nnumber.unshift(0)
// console.log(nnumber)

//? nnumber.shift()
// console.log(nnumber)

fruits = ['mango','apple','orange','bananan']
// console.log(fruits.splice(1,1,"graps"))
// console.log(fruits)

//! Serching in Array 
// searrching and filter in a Array 
//? indexof : return a first  index a which a given elemnt can be found
//? syntax: indexOf(serchElement,fromIndex)

const person = ["ram","sita","hari"]
const indexof = person.indexOf("sita")
console.log(indexof)

//? Includes():
//?The includes method checks whether an array includes a certain element 
//?return true or false

console.log( person.includes("sita"))// True

//!LastindexOf();
//?this  gives as last index number of searching element
const number = [1,2,3,4,5,6,7,7,7,8]
// const result =number.indexOf(7);
// console.log(result)
// const result =number.lastIndexOf(7);
// console.log(result)

// TOdo practice 
const month = ['jan','feb','march','april','oct']
 month.splice(month.length,0,"dec")
// console.log(month)


//?replace the march to March
const indexUpdate = month.indexOf('march');
month.splice(indexUpdate,1,"March")
console.log(month)

//?delete oct on array
const indexDelete = month.indexOf("oct")
month.splice(indexDelete,1)
console.log(month)

