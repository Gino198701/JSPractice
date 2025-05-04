const fun = require("./Test.js");
const TestCLass=require("./TestClass.js");
const Family=require("./Family.js");

console.log(fun.divide(6,3));
console.log(fun.multiple(2,5));


let t= new TestCLass(); // we can not directly call the methods from this class without object.
t.start();


let p1 = new Family("John");
p1.eat(4);
console.log(Family.tomato);













/** 
 *TODO 1. Every file(.js) in JS is treated as module
 *TODO 2. Modules(class, file) are encapsulated which means we can not call these modules without exports and imports
 *TODO 3. If we want to export the class of functions we need to use :
 * module.exports={functionName}
 * module.exports= ClassName;
 *TODO 4. The module that uses the exported module and need to call the exported module using:
 *  require("fulePath") function
 * const name = require("filePath")
  */ 



