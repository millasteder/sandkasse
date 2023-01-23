console.log('attribute');

const h1Element = document.querySelector('h1');


h1Element.id = '1238'; // gammel måte
console.log(h1Element);
h1Element.setAttribute('id', 'idbyset'); // best practice

console.log(h1Element);

 const pElement = document.querySelector('.p-element');
 
 //pElement.setAttribute('class', 'new-class');
 pElement.setAttribute('style', 'background-color: #ff0000;')
 console.log(pElement);

 const linkElement = document.createElement('a');
console.log(linkElement);

// best practice for å legge til attributter
linkElement.setAttribute('href', 'https://www.kristiania.no');
linkElement.textContent = 'link til kristiania';

// hente body fra html
const bodyElement = document.querySelector('body');
// append link Element til body
bodyElement.appendChild(linkElement);

//
const attrValue = document.createAttribute('style');
attrValue.value = 'background-color: #fcf0f3; padding: 1rem;';

//linkElement.setAttributeNode(attrValue);
pElement.setAttributeNode(attrValue);

// classList
linkElement.classList.add('link');
h1Element.classList.add('link');

