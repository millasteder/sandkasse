function currencyInit() {
// hente  amount verdi (summen)
const amountElement = document.getElementById('amount');
// hente valuta-verdi fra droplist
const currencyElement = document.getElementById('currency')

// hente knappen fra html
const convertButtonElement = document.getElementById('convert');

// hente paragraph result 
const resultElement = document.getElementById('result');

// lytte på knappen (on click)
convertButtonElement.addEventListener('click', action);
window.addEventListener ('keyup', (event)=> { 
  if(event.key === 'Enter') {
    action();
  }

});

function action() {
    resultElement.textContent = conversion();
}

function conversion() {
    if(amountElement.value === '') {
        return 'Please write an amount';
    }
    if(currencyElement.value === '') {
        return 'Please choose a currency';
    }
    return Math.floor(amountElement.value * currencyElement.value);
}
// konvertere summen med valuta 

// skrive resultat i egen paragraph
}
currencyInit();