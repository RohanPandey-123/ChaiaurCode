// array

const arr = ["rohan", "rohit", 45, "nameisWhat", 456]

console.log(arr[0]);
console.log(arr[2]);

arr.push(4);
arr.unshift("mohit")
console.log(arr);

arr.shift();
console.log(arr);

const newArr = arr.join();
console.log(newArr);
console.log(typeof newArr);

// slice ,  splice  --> difference between splice and slice is: slice does not includes last element where as splice does and also splice changes the arr wheras slice does not

console.log("A ", arr);

console.log(arr.slice(1,3));
console.log("B ", arr);

console.log(arr.splice(1,3));
console.log("C ", arr);

