// singleton  --> it is only one object

// using constructor we can make only singleton
// Object.create --> this is constructor


const Juser = {
    "full name": "Rohan Pandey",
    age: "18",
    location : "varanasi",
    email: "rohan@gmail.com",
    isLoggedIn: false,
    lastLoggedinDays: ["Monday", "Saturday"]
}

console.log(Juser.email)
console.log(Juser["email"]) // here email is accessed using email
console.log(Juser["full name"]) // now you can not use dot operator

// difference between symbol and string
let a = "rohan"
let b = "rohan"
console.log(a === b)

let sym1 = Symbol("rohan");
let sym2 = Symbol("rohan");

console.log(sym1 === sym2) // each symbols are unique

// now applying the symbols in object

const mySym  = Symbol("age");

const newUser = {
    name: "Rohan",
    mySym: 45,
}

console.log(newUser.mySym); // but it is not a symbol
console.log(typeof(newUser.mySym)); // 

const newUser1 = {
    name: "Rohan",
    [mySym]: 45,
}
console.log(typeof(newUser1.mySym)); // now it is used as a symbol

// Object.freeze(Juser); // no one can change the value of Juser


Juser.greeting = function(){
    console.log("Hello JS User");
}

console.log(Juser.greeting());