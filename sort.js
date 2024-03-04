//! sort and comapare the array 

// sorting array 
const fruits = ["bananan","Apple","Mango","orange"]

fruits.sort();
console.log(fruits)

//?comapre callback function 
number=[1,2,3,5,2,5,6,9,8]
const sortNumber = number.sort((a,b)=>{
    if(a>b)return -1;
    if(b>a)return 1;
})

console.log(sortNumber)