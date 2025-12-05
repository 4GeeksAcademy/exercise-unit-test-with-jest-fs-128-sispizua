// This is my function that sums two numbers
const sum = (a, b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7, 3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)

// CAMBIO DE MONEDAS

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
// DE EURO A DOLLAR
const fromEuroToDollar = (euro) => {
    return euro * oneEuroIs.USD;
}
console.log(fromEuroToDollar(3.5));

// DE DOLLAR A YEN
const fromDollarToYen = (dollar) => {
    return ((dollar / oneEuroIs.USD) * oneEuroIs.JPY);
}
console.log(fromDollarToYen(1));


//DE YEN A POUND
const fromYenToPound = (yen) => {
    let result = ((yen / oneEuroIs.JPY) * oneEuroIs.GBP);
    let final = Math.round(result * 100) / 100;
    return final;
}
console.log(fromYenToPound(1000));

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }