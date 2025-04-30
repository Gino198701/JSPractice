const names= ["Sujan", "Pradeep", "Harry", "Mandy", "Handerson", "Pradeep"];

// print only names which start with "Ha" and letter size is more than 5.
// names[indexNumber], at(indexNumber)

for(let i=0; i<names.length; i++){

let str = names.at(i);

if(str.startsWith("Ha") && str.length>5){
    console.log(str);
    
}


}

let school = "Techtorial";
// 1. console.log(school[i]);
// 2. console.log(school.at(i));
// 3. console.log(school.charAt(i));

for(let i=0; i<school.length; i++){

    console.log(school.at(i));
    
}