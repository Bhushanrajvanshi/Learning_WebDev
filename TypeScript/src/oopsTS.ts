class Tea {
    flavour : string;
    price : number;

    constructor(flavour : string, price : number) {
        this.flavour = flavour;
        this.price = price;
    }

    // constructor(flavour : string) {
    //     this.flavour = flavour;
    //     // this.price = price;
    // }
}

const masalaTea = new Tea("Ginger", 25);    //! it is take the value due to constructor
masalaTea.flavour = "Lemon";
masalaTea.price = 20;



class Chai {
    public flavour : string = "Masala";
    private secretIngredients  = "Cardamom";

    reveal(){
        return this.secretIngredients
    }
}

const c = new Chai();
c.reveal();



class Shop {
    protected shopName = "Chai corner"
}

class Branch extends Shop {
    getName() {
        return this.shopName //ok
    }
}

new Branch().getName;



class Walet {
    #balance = 100;

    getBalance(){
        return this.#balance
    }
}
const w = new Walet();
w.getBalance()



class Cup {
    readonly capacity : number = 250;
    
    constructor(capacity : number){
        this.capacity = capacity;
    }
}



//? Getter and Setter
class ModerChai {
    private _suger = 2;

    get getValue(){
        return this._suger;
    }

    set setValue(value : number){
        if(value > 5) throw new Error("Too much sweet")
        this._suger = value;
    }
}
const mc= new ModerChai();
mc.setValue = 5;



class ekChai {
    static shopName = "Bhushan Kumar"

    constructor(public flavour : string){

    }
}
console.log(ekChai.shopName);



abstract class Drink {
    abstract make() : void;
}

class MyChai extends Drink {
    make(){
        console.log("Brewing Chai");
    }
}



class Heater {
    heat(){}
}

class ChaiMaker {
    constructor(private heater : Heater){}

    make(){
        this.heater.heat;
    }
}