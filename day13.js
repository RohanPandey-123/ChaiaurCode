// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123456";
tinderUser.name = "Rohan";
tinderUser.isLoggedIn = true;

const regularUser = {
    email: "rohan@gmail.com",
    fullName: {
        userFullName: "Rohan",
        userLastName: "Pandey"
    }
};
 

console.log(tinderUser);

console.log(regularUser.fullName.userFullName);


// now to merge the different objetcs 

const obj1 = {1 : "a", 2 : "b"};
const obj2 = {3 : "c", 4 : "d"};

console.log(obj1);

// const obj3 = Object.assign(obj1, obj2);
const obj3 = {...obj1, ...obj2};

// const obj3 = Object.assign({}, obj1, obj2);

// console.log(obj1);

console.log(obj3);


const user = [
    {
        id : "1",
        name : "Rohan",
        age : "20",
    },
    {
        id : "2",
        name : "Rohit",
        age : "21",
    }
]
console.log(Object.keys(user[1]));
console.log(Object.values(user[1]));
console.log(Object.entries(user[1]));