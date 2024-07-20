// more about arrays

const namer = ["rohit", "rohan", "arpit", "arpita"];
console.log(namer);
const newName = ["rajput", "shivaji", "maharanapratap", "lakshmibai"];
namer.push(newName);
console.log(newName);
console.log("********************")
console.log([...namer[4], ...newName]);

const a = [...namer]; // spread operator is always used inside an array

const real_another_array = namer.flat(Infinity);
console.log(real_another_array); // it checks whatever in array 

console.log(typeof(namer));

console.log(Array.isArray("Rohan"));
console.log(Array.from("Rohan"));
console.log(Array.from({name: "hitesh"})); // don't know what to pick up for making array 

// to make array

score1 = 100
score2 = 200
score3 = 300

console.log(Array.of(score1, score2, score3));