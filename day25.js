const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

// Read the HTML content from the file
const htmlFilePath = path.join(__dirname, 'day25.html');
const htmlContent = fs.readFileSync(htmlFilePath, 'utf-8');

const dom = new JSDOM(htmlContent);
const document = dom.window.document;

// Lecture starts


// function addLanguage(langname){
//     const li = document.createElement('li');
//     li.innerHTML = `${langname}`;
//     document.querySelector('.language').appendChild(li);
// }
// addLanguage("rohan");

// optimised way to add

function addOptiLanguage(langname){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(langname))
    document.querySelector('.language').appendChild(li)
}
addOptiLanguage('go-lang');

// how to edit any specific line (here we are editing the second li tag)

// const secondLang = document.querySelector("li:nth-child(2)");
// // secondLang.innerHTML = ("Mojo")
// const newLi = document.createElement('li');
// newLi.textContent = "Mojo";
// secondLang.replaceWith(newLi);


// how to remove the           

const lastLang = document.querySelector('li:last-child')
lastLang.remove();

// Output the modified HTML back to the file
const modifiedHtmlContent = dom.serialize();
fs.writeFileSync(htmlFilePath, modifiedHtmlContent, 'utf-8');
