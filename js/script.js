// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 10 secondi.
// Dopo 10 secondi i numeri scompaiono e l'utente deve inserire,
//  uno alla volta, i numeri che ha visto precedentemente,
//  tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, 
// il software dice quanti e quali dei numeri da indovinare sono stati individuati.


/*
- creaimo array vuoto per numeri casuali
- creiamo variabile elemento html dove inserire i numeri
- generiamo 5 numeri casuali tra 1 e 100
- mostriamo i numeri per 10 secondi
-creiamo funzione che genera bottone che al click di esso  genera 5 input

-dopo 10 secondi mostriamo il bottone che genera i 5 input

-al click del bottone per viuslizzare il risultato
    - creiamo i 5 input
    - creiamo array con numeri inseriti dall'utente 
    - creiamo array dei numeri corretti
    ?Se l'array di numeri corretti è uguale a 5
        °hai indovinato tutti i numeri
    :?ALTRIMENTI SE è uguale a 0
        °hai indovinato 0 numeri
    :ALTRIMENTI
        °mostrare numeri indovinati
    - mostriamo il risultato
*/

//creaimo array vuoto per numeri casuali
const numbers = [];

//creiamo variabile elemento html dove inserire i numeri
const numbersDiv = document.getElementById("numbers");

const buttonContainerEl = document.getElementById("button-container");

const checkButtonEl = document.getElementById("check-button");

const resultEl = document.getElementById("result");


// generiamo 5 numeri casuali tra 1 e 100
for (let i = 0; i < 5; i++) {
    
    let randomNumbers =(Math.floor(Math.random() * 100) + 1);
    if(!numbers.includes(randomNumbers)){
        numbers.push(randomNumbers);
    }
}

// mostriamo i numeri per 10 secondi
numbersDiv.innerHTML = numbers.join(" ");
setTimeout(function() {
    numbersDiv.innerHTML = "";
}, 10000);

//dopo 10 secondi mostriamo il bottone che genera i 5 input
setTimeout(createInput , 10000);
 
// al click del bottone per viuslizzare il risultato
checkButtonEl.addEventListener("click" , function() {
    showResult();
})



//creiamo funzione che genera bottone che al click di esso  genera 5 input
function createInput(){
    //creiamo bottone per avviare il gioco
    const buttonPlay = document.createElement("button");
    buttonPlay.setAttribute("id" , "button-play");
    buttonPlay.innerText = "Inizia"
    buttonContainerEl.append(buttonPlay);
    //al click del bottone
    buttonPlay.addEventListener("click" , function() {
        const inputsDiv = document.getElementById("inputs");
        inputsDiv.innerHTML = "";
    
        // creiamo 5 input di testo
        for (let i = 0; i < 5; i++) {
            const input = document.createElement("input");
            input.setAttribute("type", "text") ;
            input.setAttribute("id", "input" + i);
            input.style.margin = "0 10px";
            inputsDiv.appendChild(input);
        }
    
    
    })

}



function showResult() {
     //creiamo array con numeri inseriti dall'utente 
    const userNumbers = [];
    for (let i = 0; i < 5; i++) {
        const input = document.getElementById("input" + i);
        const number = parseInt(input.value);
        if (!isNaN(number)) {
            userNumbers.push(number);
        }
    }

    // creiamo array dei numeri corretti 
    let correctNumbers = [];
    for (let i = 0; i < 5; i++) {
        if (userNumbers.includes(numbers[i])) {
            correctNumbers.push(numbers[i]);
        }
    }
    // se la lunghezza dell'array dei numeri corretti è 0
    if (correctNumbers.length === 0) {
        // non hai indovinato nessuno
        resultEl.innerHTML = "Non hai indovinato nessun numero.";
    } else if (correctNumbers.length === 5) {
         // se la lunghezza dell'array dei numeri corretti è 5
         //hai indovinato tutti i numeri
        resultEl.innerHTML = "Complimenti, hai indovinato tutti i numeri: " + correctNumbers.join(", ");
    } else {
        //hai indovinato (inserire quanti numeri ha indovinato)
        resultEl.innerHTML = "Hai indovinato " + correctNumbers.length + " numero/i: " + correctNumbers.join(", ");
    }
}
