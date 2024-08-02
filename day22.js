const coding  = ["js","css","ruby","java","python"];

const values = coding.forEach((item) => {
    console.log(item);
    return item;
})

console.log(values); 


const myNums = [1,2,3,4,5,6];
newNum = myNums.filter((num) => num > 4)
//      OR
// newNum = myNums.filter((num) => {return num > 4})
console.log(newNum);


// map

const muNums = myNums.map((num) => num + 10);
console.log(muNums);

// chaining

const newNumm = myNums
                    .map((num) => num * 10)
                    .map((num) => num + 1)
                    .filter((num) => num >= 40);
console.log(newNumm);

// reduce

const myTotal = myNums.reduce(function(acc, currval){
    return acc + currval
}, 0);

console.log(myTotal);