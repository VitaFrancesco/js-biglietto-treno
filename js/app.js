// richiesta valori in input
let km = parseInt(prompt("Insrisci i km che vorresti percorrere...", 10))
const age = parseInt(prompt("Inserisci la tua età..."))

// prezzo iniziale dato dai km
let price = km * 0.21

// sconto dato dall'età
let sconto = 0
if (age < 18) {
    discount = price * 20 / 100
} else if (age >= 65) {
    discount = price * 40 / 100
}

// prezzo finale senza arrotondamento al secondo decimale
price = price - discount
console.log('Il prezzo del biglietto è ' + price.toFixed(2) + '€')