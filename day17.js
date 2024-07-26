// concept of hoisting

console.log(addone(5)); // here function  can be accessed from anywhere

function addone(num){
    return num + 1;
}

// console.log(addTwo(5));  -- > this will show error because now the function is declared using const and it can be accessed after its declaration

const addTwo = function(num){
    return num + 2;
}

console.log(addTwo(5));   

