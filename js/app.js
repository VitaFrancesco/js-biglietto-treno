// richiesta valori in input
let km = parseInt(prompt("Insrisci i km che vorresti percorrere...", 10))
let age

// controllo dei valori ricevuti
let controlAge = false
while (controlAge === false) {
    age = prompt("Inserisci la tua età...")
    if ((!(age < 100) && !(age > 0)) || age !== Number) {
        alert("L'età deve essere espressa in numeri interi e compresa tra 0 e 100!")
    } else {
        controlAge = true
    }
}
while (!(age < 100) && !(age > 0) && (typeof(age) === Number)) {
    alert("L'età deve essere espressa in numeri interi e compresa tra 0 e 100!")
    age = prompt("Inserisci la tua età...")
}
age = parseInt(age)

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