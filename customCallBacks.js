function isPrime(num) {
    if(num <=1) return false;
    for(let i = 2 ; i<=Math.sqrt(num);i++){
        if(num%i === 0) return false;
    }
    return true;
}
const nums = [2, 3, 4, 5];
const primeNumbers = nums.filter(num => isPrime(num));
const squareNumbers = primeNumbers.map(num =>num*num);
const sum = squareNumbers.reduce((num,acc)=>num+acc);
console.log(sum);