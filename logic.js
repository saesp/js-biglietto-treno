// Calculation of the price of the train ticket


// chiedere il numero di km da percorrere
let numberKm = parseInt(prompt("Quanti Km devi percorrere?"));
console.log("number Km", numberKm);

// chiedere la sua età
let age = parseInt(prompt("Quanti anni hai?"));
console.log("age", age);

// calcolare il costo del biglietto
const minPrice = 0.21;
let realPrice = numberKm * minPrice;

console.log("price", realPrice);

if (age < 18) { // 20% sconto minorenni
    let price = realPrice * 80 / 100;
    document.getElementById("first-title").innerHTML = `Il prezzo del tuo biglietto è di ${realPrice} euro, ma è scontato del 20% perchè hai meno di 18 anni. Quindi il prezzo del tuo biglietto è di ${price} euro.`;
    console.log("reduced price", price);
} else if (age > 65) { // 40% sconto over 65
    let price = realPrice * 60 / 100;
    document.getElementById("first-title").innerHTML = `Il prezzo del tuo biglietto è di ${realPrice} euro, ma è scontato del 40% perchè hai più di 65 anni. Quindi il prezzo del tuo biglietto è di ${price} euro.`;
    console.log("reduced price", price);
} else {
    realPrice;
    document.getElementById("first-title").innerHTML = `Il prezzo del tuo biglietto è di ${realPrice} euro.`;
}



