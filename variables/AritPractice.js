let num1 = 5;
let num2 = 3;

console.log(num1+num2); //8
console.log(num1-num2); //2
console.log(num1*num2); //15
console.log(num1/num2); //1.6

console.log("Module result =" + (num1%num2)); // 5= 3+2 = 2
console.log(num1**num2); // 5x5x5 = 125 

// PEMDAS = parant, exponential, multiplication, division, add, sub  
let result = num1 ** num2 / 2 * 5 % 2 + 8 - (9*0); // 

console.log(result);

let number =9;
let test = 5 + number++; // number is still 9 on this line. it will be 10 after this line

let test2 = 5 + number;

console.log("Test1: "+ test); //14
console.log("Test2: "+ test2); //15
console.log(number); //10



