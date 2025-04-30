
function print() {
    console.log("Hello World!");
    

}

print();
 
function greeting(name){

console.log("Welcome to the class, "+name);

}

greeting("Gytis");

// 1. We need to use function keyword while crating the methods in js file.
// 2. We don't need to provide data types when we give the parameter.

function getAreaOfRectangle(a, b){

    return a*b;
}

console.log("Area of Rectangle is "+getAreaOfRectangle(2.2, 4.5));



// create the method which takes one parameter and return factorial number of this parameter.
// factorial meaning : 5= 5*4*3*2*1

// TASK:

function getFact(num){
    if(num === 1 || num === 2){
        return num;
    }

    let result=1;
    for(let i=num; i > 1 ; i--){
    result *=i;
    }
    return result;
}
console.log("Factorial num: "+getFact(5));
 