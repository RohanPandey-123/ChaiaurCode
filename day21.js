// Nullish Coalescing Operator

let val1;
// val1 = 5 ?? 10;
// val1 = undefined ?? 10;



// loops 

// console.log(val1);


for(let index = 1; index <= 10; index++) {
    // console.log(`This is count No.  ${index}`);
}

const arr = [10,20,3,4]

for(let i of arr){
    // console.log(i);
}

// maps --> unique property of map is it stores unique value and also keeps the order same of the input value

const map = new Map()
map.set('IN', "India")
map.set('EN',"Russia")

console.log(map);


for(const [key, value] of map){
    console.log(key);
}

for(const [key, value] of map){
    console.log(value);
}

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

// this shows error --
//                   

// for(const [key, value] of object) {
//     console.log(key);
// }

// NOTE :- here we use for in type loop to print the object values : why so ? because for in picks up the keys
for(const key in myObject){
    // console.log(key);
    console.log(myObject[key]);
 }

 // check for in using arrays

 const newArr = ["rohan", "nyasha", "rohit"];

 for(const key in newArr){
    console.log(key);  // if i print this is i will get output as an index of the numbers 0, 1, 2 etc.
    console.log(newArr[key]);
 }
