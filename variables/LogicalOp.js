let myCash = 5000;
let ccLimit = 6000;
let total = myCash+ccLimit;
let carPrice = 8000; // tax included

// || if one of the condition is true, result will be true
// ccLimit >=carPrice AND carPrice <= ccLimit ARE SAME THING
let result = myCash>= carPrice || ccLimit >=carPrice || total >= carPrice;
console.log(result);

console.log(carPrice)

let num1 =10;
let num2 = 15;
// && - if one of the condition is false, the result will be false
let final = num>13 && num <19;



