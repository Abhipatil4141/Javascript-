//! Filter Products By Price 

const product = [
    {name:"laptop",Price:1200},
    {name:"charger",Price:260},
    {name:"phone",Price:500},
    {name:"Bag",Price:750},
    {name:"Mouse",Price:320},
    {name:"Tablet",Price:480},
];

// filter the product with price less than or equal to 500

const FilterProduct = product.filter((curElem)=>{
    return curElem.Price<=500
})
console.log(FilterProduct);

//! filter Unique values 
const number = [1,2,3,4,5,6,4,5,8];

let UniqueValues = number.filter((curElem,index,arr)=>{
    return arr.indexOf(curElem)===index
})

console.log((UniqueValues))