// memory and heaps

// stack (Primitive) , Heap (Non-Primitive)

// in heap we get reference
// but in stack we get copy of the variable



let myYoutubeName = "rohan"
let useOne = {
    email: "user@google.com",
    name: "rohan"
}
let useTwo = useOne;
useTwo.name = "rohit";
console.log(useOne.name);