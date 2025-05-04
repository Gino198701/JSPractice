
class Animal{
    kind='fish';
    name = 'nemo';
    age= '1';

    // we should not provide function keyword while creating method inside the class.
    swim(){
        console.log(this.name +" is swimming.");
        
    }

}

function swim(){ // we must provide the function keyword. outside of the class

}

let f= new Animal();

console.log(f.name);
f.swim();


let l = new Animal()

module.exports=Animal;
