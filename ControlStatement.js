//! Control statement & loops 


//? If else statement 
//? Switch statement 
//? while loop
//? Do while loop 
//? for loop 


// If Else 
var Age = 12;
var isCitize = true;
var isRegister = true ;

if(Age>= 18){
    if(isCitize){
        if(isRegister){
            console.log("You are eligible to vote")
        }
        else{
            console.log("you are not eligible due to ur not register")
        }

    }else{console.log("You are not eligible due to citizienship status")}
}else{
    console.log("You are not eligible to vote");
}
