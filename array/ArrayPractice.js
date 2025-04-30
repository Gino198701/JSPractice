const cities =['Houston', 'Chicago','New York'];

console.log(cities[1]);


const cars = new Array ("Tesla", "Honda", "Lexus");

console.log(cars[100]); //undefined

console.log(cars); // [ 'Tesla', 'Honda', 'Lexus' ]
console.log(cars.toString()); // Tesla,Honda,Lexus

// regex = regular expressions [0-9], [a-z]

let str = "t,a,1,c,5,p";
let str2 = "tech1h12hj321jdc";

//split --> ',', " ", "." --> regex

let splitArr = str.split(",")
console.log(splitArr);


