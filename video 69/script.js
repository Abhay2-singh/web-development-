let a = 6
function factorial(number){
    let arr = Array.from(Array(number+1).key())
    console.log(arr.slice(1,))
    let c = arr.slice(1,).reduce((a,b)=> a*b)
    return c
}
function factfor(number){
    let fac =1;
    for (let index = 1; index < number; index++) {
        const element = number;
        fac=fac*index;
        
    }
    return fac
}
console.log(factorial(a))
console.log(factfor(a))
