// variabel for container nav

const navElement = document.createElement('nav');

// variabel for ul list 
const ulElement = document.createElement('ul');
console.log(ulElement)

//setter nav inn i header
//variabel som lagrer verdi av html node av header
const headerElement = document.querySelector('header');

headerElement.appendChild(navElement);

console.log(headerElement)

// en eller flere variabler for list item 




// sette en ul list inn i nav
navElement.append(ulElement);



// sette item inn i list, etter hverandre alle list item (li)

const li1Element = document.createElement('li');
li1Element.textContent = 'About';
ulElement.appendChild(li1Element);

const li2Element = document.createElement('li');
li2Element.textContent = 'Products';
ulElement.appendChild(li2Element);


const li3Element = document.createElement('li');
li3Element.textContent = 'more';
ulElement.appendChild(li3Element);

console.log(headerElement);