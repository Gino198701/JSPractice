const states = ['CA', 'TX', 'IL', 'NY', 'WA']; // one array is created in memory

states.shift(); // removes the first element. it updates existing array in the momory

console.log(states);


states.unshift('FL'); // add element into beggining of the array
console.log(states);

states.unshift('AZ');
console.log(states); 

const newArr = states.slice(2,5); //remove elements in the array by the index

console.log(newArr);

newArr.sort();  // A,B,C. 1,2,3 ect.
console.log(newArr);


