var firstName = 'Milla';



console.log('Hei på deg')
console.log(firstName + ' er ikke sliten');
console.log(firstName + ' er sulten');

// linjen nedenfor, linje 10, fjerner alle tidligere console
console.clear();



function sub(a , b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}


console.log(sub(20, 10));
console.log(multiply(2, 10));


console.clear(); // fjerner alt i console ovenfor 

const age = 44; //number
const yourAge = 56; //number

const yourName = 'Pål'; //string

const isLoggedIn = true; //boolean 

console.log(isLoggedIn);

let mouse;
console.log(mouse); //undefined

let keybord = null; 


console.log(age + yourAge);
//

console.log(Math.PI)

console.log(new Date())

console.clear();

if (10<5) {
//alert('ja 10 er større enn 5');
} else{
    //alert('nei, 5 er mindre enn 10');
}

console.clear();

// sjekke om butikken er åpen eller stengt akkurat nå

function checkOpeningTime(){

    // 1. tidspunkt for åpning 
    const openingTime = 8;
    // 2. tidspunkt for stegningstid
    const closingTime = 18;
    // 3. tiden akkurat nå 
    const today = new Date();
    // 4. stengte dager
    const timeNow = today.getHours(); 

    //
    if(timeNow > openingTime && timeNow < closingTime) {
        alert('Butikken er åpen!');
    } else{ 
        alert('Butikken er stengt!');

    }
}

checkOpeningTime();

// bytter mellom darmode og lightmode

// mode value, light eller dark


function switchMode(status) {
if (status === 'light') { 
    alert('du valgte lightmode')
   } else {
    alert('du er i darkmode')
   }

};

//switchMode('dark');

console.clear();


// regne omkretsen av en sirkel 

function calculateCircle(diameter) {

// 2PIr // diameter * PI

const pi = Math.PI; 
const result = diameter * pi
console.log(Math.ceil(result));
}

calculateCircle(13)


// lag en funskjon som console, log areal av et rektangel
// ved å gi høyde og bredde verdi 

//løsning 1

function areal(a, b ) {
return a * b; 

}

console.log(areal(2, 10));
console.log(areal(20, 5));

// løsning 2

function calculaterectangle (areal) {
   
    console.log(areal);

}

calculaterectangle (5 * 5)

// løsning 3

function rectangle(width, height){
    console.log(width * height)
}
rectangle(13, 7);


console.clear();

//////



