// this operator

const user = {
    userName : "rohan",
    age: "45",

    anotherFunc : function(){
        console.log(`${this.userName}`)   // here "this" is just "user"
    }

}
// const user1 = {
//     userName : "rohan",
//     age: "45",

//     anotherFunc : function(){
//         console.log(`${this.userName}`)
//     }

// }

user.anotherFunc();
user.userName = "rohit"
// user1.anotherFunc();

console.log(this)  // here, if, we are not specifying the object using "this" operator then we are getting a null response, but suppose if we use a this operator in browser console then we would get a window as a result


// arrow function

console.log("arrow function");

// explicit return

const chai = () => {
    const userName = "rohan";
    console.log(this.userName);
}

chai();

// arrow fn  = () =>  

// implicit return -> dont have to write return

const addNum = (num1, num2) => (num1 + num2);


// .forEach

const arr = [2,5,3,7,5];
arr.forEach(console.log);