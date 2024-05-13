let a = prompt("enter a first  number")
let b = prompt("enter a second  number")
if(isNaN(a)  || isNaN(b)){
    throw SyntaxError("sorry this is not allowed vikash please write a proper code ")
}
let sum = parseInt(a) + parseInt(b);
function main()
{
    let x=1;
try{
console.log("the sum is", sum*x )
return true
}catch(error){
    console.log("error a gaya hai vikash bhai ")
    return false 
}
finally{
    console.log("files are being closed and db connection is being closed")
}
}
let c = main()

