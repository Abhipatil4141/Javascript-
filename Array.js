//* ARRAY IN JAVASCRIPTS

//? Iteable -object where you can use for of loop
//? Array like Object Any object with length property and use indexes to access iteam
//? Array as objects : Array in javascript are specific type of object that has numeric keys
//? (indices) and length property.


let arr = [];
console.log(typeof arr)//!output :object 

//?creting array

//! using Array constructor

let fruits = new Array("apple","bananan" ,"orange")
console.log(fruits)

//!using array literal 

let fruit = ["apple","bananan" ,"orange"]

//! How to access the elements 

let fruits1 = ["apple","bananan" ,"orange"]

 console.log(fruits1[1]) 

 //!Modifying Elements

 fruits1[2]="mango"
 console.log(fruits1)

//?  Loop on array 

//! for of loop 

for(let item of fruit){
    console.log(item)
}

//! for in loop 
for(let item in fruit){ // output will be 0,1,2
    console.log(item)
}

//! for  loop 
for (item =0;item<fruit.length;item++){
    console.log(fruit[item])
}


//! forEach in loop 
fruit.forEach((curElem,index,arr)=>{
    console.log(`${curElem} ${index}`)
    // console.log(arr)

})//? we can't strored the data in variable it give undefined output



//! map function
const MyMaparr =fruits.map((curElem,index,arr)=>{
    return ` My faviourt fruits is ${curElem}`
})
console.log(MyMaparr)