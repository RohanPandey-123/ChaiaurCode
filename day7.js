const name  = "rohan"
const age = 45;


// backticks ``
// we can any place holder and I can use string interpolation
console.log(`Hey there i am ${name} and my age is ${age}`);

const gameName = new String('rohanPandey')

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a')); // returns the first element
const newString = gameName.substring(0, 5);
console.log(newString)
// const newString1 = gameName.slice(-5, 2);
// console.log(newString1)

const url = "rohan@gmail.com";
console.log(url);
console.log(url.replace('@gma', '+++'));
console.log(url.includes("+++"));

console.log(gameName.split('a'));d