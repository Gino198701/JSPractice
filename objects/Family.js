class Family {


   static tomato = 10;
    constructor(name){
        this.name = name;
    }
    eat (number){
        //* variables that you created inside the method is called local variable. You can't access it outside the class. 
        // everytime when we eat, it will reduce the tomato.
        Family.tomato-=number;
    }
    static sayGoodMorning(){
        console.log("Good morning!");
        
    }
}

let p1 = new Family("Gytis"); // since tomato is non-static, every object has 10 tomatoes
p1.eat(2);
let p2 = new Family("Adam");
p2.eat(3);


console.log(Family.tomato); //5


Family.sayGoodMorning();
// p1.sayGoodMorning(); // You need to call this method with Class name. 

module.exports=Family;


/*
 *1- Static means belongs to the class. 
 *2- Local variables (variables inside the methods) can not be static.
 *3- We can use static for variable and methods. 
    * Static variables will be shared with all the objects. (Tomatoe example)
    * We can call the static methods with Class name without creating an object.
    * We can call static variables inside the non static functions using
    * class name : Family.tomato

 */
