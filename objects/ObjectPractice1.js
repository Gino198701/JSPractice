

let student={
    fname :'Gytis',
    lName : 'Gastevicius',
    phone : '7635261177',
    location : {
        city : 'Chicago', 
        state: ['IL', 'FL']

    },

    writeCode : function(){
        console.log("Hello World!");
        
    }

}
// Student is an OBJECT.
console.log(student.lName);
console.log(student.location.city);
console.log(student.location.state[1]);
student.writeCode();
