// starte med å lage en liste over ting som skal gjøres

// lage en variabel html element fra document
// bygge en h1 og gi en tekst content til h1 som tittel
// bygge en img tag og gi en src bilde verdi
// bygge en paragraph og legge inn en tekst 
// append alle elementer inne i hoved-container 

const bodyElement = document.querySelector('body');

const h1Element = document.createElement('h1');
h1Element.textContent = 'tittel til artikkel';

const imgElement = document.createElement('img');
imgElement.src = './assets/image1.jpg'
imgElement.alt ='sand strand'

const pElement = document.createElement('p');
pElement.textContent =`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur odit voluptatum ad! 
Tempore quis dicta error quod officia dolorem expedita. Perspiciatis dolore rerum ipsam ullam id fuga molestiae repellat, repellendus, hic minima in. 
Error tenetur ratione blanditiis tempora culpa ea officia. Iure omnis atque dolorem, veniam similique iusto libero harum.`

bodyElement.appendChild(h1Element);
bodyElement.appendChild(imgElement);
bodyElement.appendChild(pElement);