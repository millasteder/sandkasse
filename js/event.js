const averageAge = () => {
    return (24 + 32 + 48) / 3;
}

console.log(averageAge());


function calculate() {
    return 9 * 2; 
}
console.log(calculate());


// events

// hente element/box fra DOM 
const boxElement = document.querySelector('.box');


// hente select element for å lytte på endring i det

const selectElement = document.querySelector('.colors');

// fullføre en oppgave når endring skjer i select element 

selectElement.addEventListener('change', (event) => {
    
    console.log(event.target.value)

boxElement.setAttribute('style', `background-color: ${event.target.value};`)

});

//hente input element med sin egen verdi når man klikker på knappen

const inputElement = document.querySelector('#firstName');

// hente knappen, må lytte på hendelse når vi klikker på den
const buttonElement = document.querySelector('#getName');
// hente fra html resultat
const resultElement = document.querySelector('#resultat');


buttonElement.addEventListener('click', () => {
resultElement.textContent = inputElement.value;
});