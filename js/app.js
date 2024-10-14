// richiesta valori in input
let km = parseInt(prompt("Insrisci i km che vorresti percorrere...", 10))
const age = parseInt(prompt("Inserisci la tua età..."))

// prezzo iniziale dato dai km
let prezzo = km * 0.21

// sconto dato dall'età
let sconto = 0
if (age < 18) {
    sconto = prezzo * 20 / 100
} else if (age >= 65) {
    sconto = prezzo * 40 / 100
}

// prezzo finale senza arrotondamento al secondo decimale
prezzo = 'Il prezzo del biglietto è ' + (prezzo - sconto) + '€'
console.log(prezzo)