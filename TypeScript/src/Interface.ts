//? Here All About Interface
interface Chai {
    flavour : string,
    price : number,
    milk? : boolean,
};

const masala : Chai = {
    flavour : "masala",
    price : 30
}



interface Shop {
    readonly id : number,
    name : string,
}

const s : Shop = {id : 1, name : "BHUSHAN"};
// s.id = 5;



interface DiscountCalculator {
    (price : number) : number,
}
const apply50 : DiscountCalculator = (p) => p * 0.5;



interface TeaMachine {
    start() : void;
    stop() : void;
}

const machine : TeaMachine = {
    start(){
        console.log("Starting Machine");
    },

    stop(){
        console.log("Stoping Machine");
    }
}



interface ChaiRatings {
    [flavor : string] : number 
}

const ratings : ChaiRatings = {
    masala : 4.5,
    lemon : 4.5,
}



interface User { name : string }
interface User { age : number }

const u : User = {
    name : "Bhushan",
    age : 23
}



interface A { name : string }
interface B { age : number }

interface c extends A, B {
    name : "Bhushan",
    age : 20
}

