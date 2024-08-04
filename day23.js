const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

// Read the HTML content from the file
const htmlFilePath = path.join(__dirname, 'day23.html');
const htmlContent = fs.readFileSync(htmlFilePath, 'utf-8');

const dom = new JSDOM(htmlContent);
const document = dom.window.document;

// Lecture starts
console.log(document.getElementById('title').innerHTML);

// Difference between innerContent and innerText
// innerContent -> provides the text that is visible only on the website
// innerText -> provides the text that is either visible or has been removed by the coder
// innerContent -> provides the text that is present inside that division

console.log(document.querySelector('h2').innerHTML);
console.log(document.querySelector('#title').innerHTML);
console.log(document.querySelector('.whatisthis').innerHTML);
console.log(document.querySelectorAll('p')[0].innerHTML);
console.log(document.querySelectorAll('p')[1].innerHTML);
console.log(document.querySelectorAll('p')[2].innerHTML);
document.querySelectorAll('p')[2].style.color = "red";
document.querySelectorAll('p')[2].style.backgroundColor = "white"; // run the html file to see the changes


// Output the modified HTML back to the file
const modifiedHtmlContent = dom.serialize();
fs.writeFileSync(htmlFilePath, modifiedHtmlContent, 'utf-8');
