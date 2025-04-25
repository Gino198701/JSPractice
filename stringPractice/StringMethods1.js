let school = "Houston University";

// lenght = is property in JS which gives us lenght of variable
let scLenght = school.length;

console.log(scLenght);

// charAt(indexNumber), at(indexNumber), [indexNumber]
// it returns us char as String from given string.

//charAt method returns nothing when we provide out index.
// at() and [] returns undefined when we provide out of index


let sc = school.charAt(4);
console.log(sc); // t
console.log(typeof sc); // string
let sc2 = school.at(5);

console.log(sc2); // o

let sc3 = school[3]; // s
console.log(sc3);

let school2= school.slice(2, 6); // 2,3,4,5 --> index num of 6 will not be printed

console.log(school2);

let school3= school.substring(100, 6); 

console.log(school3);

let school4 = school.toUpperCase(); // to upper case 
console.log(school4);

let  school5 = school.toLowerCase(); // to lower case
console.log(school5);

let school6 = school.trim(); // to trim
console.log(school6);