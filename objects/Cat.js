    
    const Animal=require("./Animal")
    class Cat extends Animal{

      #dailySleepHour = 10;
        city = "Chicago"; // outside the class applied for everyone we can use it anytime
    constructor(name, age, kindOfCat, color){
    this.name = name;
    this.age = age;
    this.kindOfCat = kindOfCat;
    this.color= color;
    }
    #greetingMessage(){ // private method goes with # in front
        console.log("Hello from the "+this.name);
        
    }
    getSleepHour(){ // public method goes without # in front
        this.#greetingMessage();
        return this.#dailySleepHour
    }

    }

    let dodo = new Cat("Dodo", 10 , "Napoletean", "white");

    console.log(dodo.kindOfCat);
    console.log(dodo.city);
    console.log(dodo.getSleepHour());
    
    

    let princess = new Cat ('Princess', 12, 'Scottish', 'black');
    console.log(princess.kindOfCat);
    console.log(princess.city);
    

    princess.swim();
    