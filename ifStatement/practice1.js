let computer$ = 1000;

let budget$ = 1200;

// if budget is bigger than computer price, print leftover after payment. +
// if budget is equals price, print "you can buy the computer" +
// if budget is less than computer price, "you can bot buy"+

if(budget$>computer$){
    let leftOver = budget$-computer$;
    console.log('You can buy the computer. This is the leftover after payment: '+ leftOver);
    
}else if(budget$==computer$){
console.log('You can buy the computer.');

}
else{
    console.log("You can not buy the computer. Try again!");
    
}

console.log("This code will be executed");
