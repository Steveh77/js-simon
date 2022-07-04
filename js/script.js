// Descrizione:
// Visualizzare in pagina 5 numeri casuali  diversi tra loro. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite i prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.




/* Visualizzare in pagina 5 numeri casuali  diversi tra loro.
   Da lì parte un timer di 30 secondi. */


// variabili
const numbersGrid = document.getElementById('numbers-grid');
let randomNumbers = [];


 

// for (let i = 0; i < 5; i++) {
//     const element = (Math.floor(Math.random() * 101)+ 1);
//     randomNumbers.push(element)
//     numbersGrid.innerText = randomNumbers.join(" ")
// }
for (let i = 0; i < 5; i++) {
    const element = (Math.floor(Math.random() * 100)+ 1);
    if (!randomNumbers.includes(element)) {
        randomNumbers.push(element)
        numbersGrid.innerText = randomNumbers.join(" ")
    }else{
        i--
    }
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
        
        
    }

}, 1000);

// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite i prompt().
let numeriTrovati = [];
let numeriUtente = [];

setTimeout(function() {
    for (let i = 1; i <= 5; i++) {
        let userinput = parseInt(prompt(`scrivi il ${i} numero`));
        numeriUtente.push(userinput) 
        
    }
    //    confrontare randomNumbers e numeriUtente
    let cont = 0;
    for (let j = 0; j < randomNumbers.length; j++) {
        if (numeriUtente.includes(randomNumbers[j])) {
            cont = cont + 1
            numeriTrovati.push(numeriUtente[j])
        }
        
    }
    console.log(`hai trovato ${cont} numeri`)
    alert(`hai indovinato ${cont} numeri`)
    
}, 6000);

console.log(numeriUtente)
console.log(numeriTrovati)


// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

