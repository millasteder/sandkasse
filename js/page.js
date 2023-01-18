

const pElementCreate = document.createElement('p');
pElementCreate.textContent = 'dette <p> bygger vi i JavaScript';
console.log(pElementCreate);

const parentBodyElement = document.querySelector('.body');
parentBodyElement.append(pElementCreate);

console.log(parentBodyElement);

const h2ContainerCreate = document.createElement('h2');
h2ContainerCreate.textContent = 'tittel til div container';
//h2cContainerCreate.append('en tittel til h2') 

const boxContainerElement = document.querySelector ('.container');
boxContainerElement.appendChild(h2ContainerCreate);

const whoIsParent = h2ContainerCreate.parentNode; // treffer parent node html element
console.log(whoIsParent)

