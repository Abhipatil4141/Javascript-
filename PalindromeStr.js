// palindrom string like isi or madam

const isPalindrome = (str)=>{
    let reverse = ""
    for (let char=str.length-1;char>=0;char--){
       reverse = reverse + str[char]
    }

    // if(str===reverse){
    //     return true
    // }else{
    //     return false
    // } or
    return str === reverse ? true : false
}

console.log(isPalindrome("madam"))
console.log(isPalindrome("Abhi"))