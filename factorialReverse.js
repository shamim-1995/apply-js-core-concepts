function factorial(number){
    let result = 1;
    for(let i = number; i >= 1; i--){
        result = result * i;
        console.log(i);
    }
    return result;
}
const number = 10;
const fact = factorial(number);
console.log('factorial of:',number, fact);