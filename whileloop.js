//! while loop : A while loop in js is a control structure that repeatedly 
//! extecutes a block of code as long as a specified condition remain true.

//? while loop while(condition){}
//? do while loop do{}while(condition)

let i =1;

// while (i<=10){
//     console.log(i);
//     i++;
// }

do {
    console.log(i);
    i++;
}while(i<=10);

// problem create 5 table using while loops

var num =1 ;
while(num<=10){
    console.log("5*" +num + "=" + 5*num); //! this is string concatination
    num++;
}