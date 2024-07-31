//  Javascript Execution Context  : are of three types

// 1.  Global Execution Context
// 2.  Function Execution Context
// 3.  Eval Execution context

// there are two phases :- 
// 1. Memory Creation Phase
// 2. Execution Phase




// for eg:

// code 


// let val1 = 10
// let val2 = 15
// function addNum(num1, num2){
//     let total = num1 + num2
//     return total
// }
// let result = addNum(val1, val2)
// let result2 = addNum(10, 2);



//  Fist code is allocated in global execution / global environment and it is allocated under "this"  --> and it is cetain to happen

// Secondly all variables are created and initially all the variables are given undefined value. for eg :
// val1 = undefined
// val2 = undefined
// addNum = definition
// result1 = undefined
// result2 = undefined

// see the code line by line
// thirdly, execution phase, now val1 takes the value of 10 and val2 takes the value of 15
// then it ecounters the code of function, after seeing the definition of function it does nothing
// after all the function creates its own environment / execution context
// and now again this environment has its own phases
// so now, the first phase was MEMORY PHASE and second phase was EXECUTION CONTEXT
// therefore this phases executes consecutively one after the other 
// during memory phase :- 
// val1 -> undefined
// val2 -> undefined   note : here it has nothing to do with num1, num2
// total -> undefined

// now exexution phase starts
// num1 = 10
// num2 = 15
// total = 25
// this value returns to main >global execution context
// once function gets executed the environment gets deleted 