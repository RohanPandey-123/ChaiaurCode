const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

// Read the HTML content from the file
const htmlFilePath = path.join(__dirname, 'day24.html');
const htmlContent = fs.readFileSync(htmlFilePath, 'utf-8');

const dom = new JSDOM(htmlContent);
const document = dom.window.document;

// Lecture starts



const parent = document.querySelector('.parent');
console.log(parent.innerHTML);
console.log(parent.children[1].innerHTML);
for(let i = 0; i < parent.children.length; i++){
    console.log(parent.children[i].innerHTML);
}

// querySelector selects the first value whereas querySelectorAll selects all the values...

console.log(parent.firstElementChild.innerHTML);
console.log(parent.lastElementChild.innerHTML);



const dayOne = document.querySelector('.day');
console.log(dayOne.innerHTML);
console.log(dayOne.parentElement. innerHTML);
console.log(dayOne.nextElementSibling.innerHTML);

console.log("NODES : ", parent.childNodes)

// lets print childnodes

for(let i = 0; i < parent.childNodes.length; i++){
    console.log(parent.childNodes[i]);
}
// 

console.log("--------------"); 


// Lecture Ends

// Output the modified HTML back to the file
const modifiedHtmlContent = dom.serialize();
fs.writeFileSync(htmlFilePath, modifiedHtmlContent, 'utf-8');
