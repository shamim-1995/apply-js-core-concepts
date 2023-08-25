
function getSumOfAnArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const elements = numbers[index]
        sum = sum + elements;
        // console.log(index, elements, sum);
    }
    return sum;



}




function getOddNumberOfAnArray(numbers){
    const oddNummbers = [];
for(let i = 0; i < numbers.length; i++){
    const index = i;
    const elements = numbers[i];
    if(elements % 2 !== 0){
        console.log(index, elements);
        oddNummbers.push(elements);

    }
    
}
return oddNummbers;

}

const myNumbers = [12, 65, 45, 78, 32, 45, 91];
const oddNummbers =  getOddNumberOfAnArray(myNumbers);
console.log(oddNummbers);
 const oddNumberSum =  getSumOfAnArray(oddNummbers);
 console.log('odd number sum:',oddNumberSum);