// Descrizione:
// Visualizzare in pagina 5 numeri casuali  diversi tra loro. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite i prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.




/* Visualizzare in pagina 5 numeri casuali  diversi tra loro.
   Da lì parte un timer di 30 secondi. */


// variabili
const numbersGrid = document.getElementById('numbers-grid');
let randomNumbers = [];
const chiedoNumeri = '';
let numeriUtente = [];

 

for (let i = 0; i < 5; i++) {
    const element = (Math.floor(Math.random() * 101)+ 1);
    randomNumbers.push(element)
    numbersGrid.innerText = randomNumbers
}

console.log(randomNumbers)

// countdown
const timerDisplay = document.getElementById('timer-display')
let seconds = 5;
timerDisplay.innerText ="Timer : " + seconds;

const countdown = setInterval(function() {
    seconds--;
    timerDisplay.innerText = "Timer : " + seconds;
    if(seconds === 0){
        clearInterval(countdown);
        timerDisplay.innerText = "";
        numbersGrid.classList.add('d-none')
        console.log("hello")
        
    }

}, 1000);





