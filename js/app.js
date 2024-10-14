// richiesta valori in input
let km = parseInt(prompt("Insrisci i km che vorresti percorrere...", 10))
const age = parseInt(prompt("Inserisci la tua età..."))

// prezzo iniziale dato dai km
let price = km * 0.21

// sconto dato dall'età
// let discount = 0
// if (age < 18) {
//     discount = price * 20 / 100
// } else if (age >= 65) {
//     discount = price * 40 / 100
// }

let discount = age < 18 ? price * 20 /100 : (age >= 65 ? price * 40 /100: 0)

// prezzo finale senza arrotondamento al secondo decimale
console.log('Il prezzo del biglietto è ' + (price-discount).toFixed(2) + '€')