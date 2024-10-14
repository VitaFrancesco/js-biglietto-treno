// richiesta valori in input
let km
let age

// controllo dei valori ricevuti
let regex = /^[0-9]+$/g
let kmControl = false
let ageControl = false

do {
    km = prompt("Insrisci i km che vorresti percorrere...", 10)
    if (regex.test(km) === false) {
        alert("Inserisci i km in numeri interi senza punteggiatura o lettere!")
    } else if (!((km > 0) && (km <= 12000))) {
        alert("Inserisci un numero di km idoneo!")
    } else {
        kmControl = true
    }
} while (kmControl === false)

do {
    age = prompt("Inserisci la tua età...")
    if (regex.test(age) === false) {
        alert("L'età deve essere espressa in numeri interi senza punteggiatura o lettere!")
    } else {
        age = parseInt(age)
        if (!((age > 0) && (age <= 100))){
            alert("L'età deve essere espressa in numeri interi e compresa tra 0 e 100!")
        } else {
            ageControl = true
        }
    }
} while (ageControl === false)

// isNaN(X) === true "non è un numero"

// prezzo iniziale dato dai km
let price = km * 0.21

// sconto dato dall'età
// let discount = 0
// if (age < 18) {
//     discount = price * 20 / 100
// } else if (age >= 65) {
//     discount = price * 40 / 100
// }

// sconto dato dall'età con operatore ternario
let discount = age < 18 ? price * 20 /100 : (age >= 65 ? price * 40 /100: 0)

// prezzo finale senza arrotondamento al secondo decimale
console.log('Il prezzo del biglietto è ' + (price-discount).toFixed(2) + '€')