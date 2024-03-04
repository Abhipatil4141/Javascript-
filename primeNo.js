//! prime number 
//? todo prime number are number that have only 2 factors:1 and themselves


var num = 13;
var isPrime = true;

for (var i =2 ;i<num;i++){
    if(num % i === 0){
        isPrime = false;
        break; 
    }
}

if(isPrime){
    console.log("num is prime")
}else{
    console.log("num is  Not prime")
}


//! crete the table of 4

for(var num = 1; num<=10;num++){
    console.log("4 *" + num+"= "+ 4*num);
}