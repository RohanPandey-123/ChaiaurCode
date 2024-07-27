// Immediately Invoked Function Expressions (IIFE)


// named IIFE

(function chai(){
    console.log(`DB CONNECTED`);
})();


// Unnamed IIFE 

( (hello) => {
    console.log(`Hello guru ${hello}`);
})("Rohan Pandey");