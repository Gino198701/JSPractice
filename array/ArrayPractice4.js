const countries = new Array("USA", "Mexico", "Germany", "France");

let indexNumber1 = countries.indexOf("USA");
console.log(indexNumber1); //0

let indexNumber2 = countries.indexOf("Ger")
console.log(indexNumber2); //-1

console.log(countries.includes("France")); // returning boolean TRUE or FALSE
console.log(countries.includes("England")); // false


