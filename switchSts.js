// switch statement 
var day = "nday";

switch (day){
    case "Monday":
        console.log("today is Monday");
        break;
    
    case "sunday":
        console.log("today is sunday")
        break;
    
    case "friday":
        console.log("today is friday")
    

    default:
        console.log("this week to busy")
}

//! problem for area findout of circle reactangle squar
let areaofshap = "square"
let a = 45
let b = 15;
let r = 25

switch(areaofshap){
    case "circle":
        result = 3.14*(r*r);
        console.log(result);
        break;
    case "square":
        result= a*a;
        console.log(result);
        break;
    case "reatangle":
        result = a*b;
        console.log(result);
        break;
    
    default:
        console.log("tha shap was undefined")

}
