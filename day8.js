// number and maths

const score = 400
console.log(score);

const balance = new Number(400.216);
console.log(balance);
console.log(balance.toFixed(2)); // returns the decimal value up to two decimal places after rounding up

const otherNumber = 14523.45678;
console.log(otherNumber.toPrecision(1));  // return 1 significant integers after rounding off. basically it returns the significant n digits
console.log(otherNumber.toLocaleString('en-IN'))


// Maths

console.log(Math);

// print the numbers between 10 and 20
const min = 10;
const max = 20;   
console.log(Math.floor((Math.random() * 10)) + min);
     