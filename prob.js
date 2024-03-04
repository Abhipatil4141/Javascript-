// write code for leap year 
// program to check the if a year is a leap year 
//? if a year is divisible by 4 and not divisible by 100 ,or 
//? If year is divisible by 400,



var year = 2005;

if((year%4 ===0 && year%100 !== 0) || (year%400===0)){
    console.log(year,"it is a leap year")
}else{
    console.log( year ,"it is not leap year")
}