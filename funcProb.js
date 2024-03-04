//! Question 1 : Calculator Function 

// console.log(Calculator(2,5,"+"));---> Output is 7
// console.log(Calculator(2,5,"-"));
// console.log(Calculator(2,5,"*"));


function calculator(a,b,operator){
    let result;
    switch(operator){
        case '+':
            result = a+b;
            return result
            
        case '-':
            result= a-b;
            return result
        
        case '*':
            result= a*b;
            return result
        
        default:
            return "no operator found"
        

    }
}

 console.log(calculator(5,6,'*')) 