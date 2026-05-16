const chai = {
    name : "Masala chai",
    price: 20,
    isHot: true,
};

// {
//     name : "Masala Tea",
//     price : 22,
//     isHot : true,
// }



let tea : {
    name : string;
    price : number;
    isHot : boolean;
}

tea = {
    name : "Masala chai",
    price : 25,
    isHot : true
}



type Tea = {
    name : string;
    price : number;
    ingredients : string[],
}

const adrakTea : Tea = {
    name : "AdrakTea",
    price : 25,
    ingredients : ["ginger", "tea leaves"]
}



type Cup = { size : string };
let smallCup : Cup = {size : "200Ml"};
let bigCup = {size : "500ML", material : "Steel"};

smallCup = bigCup;  //! this is allow in TS

type Brew = {brewTime : number}
const coffee = {brewTime : 5, beans : "Arabica"}
const chaiBrew : Brew = coffee;     //! this is allow in TS



type User = {
    username : string;
    password : string;
}

const u : User = {
    username : "BhushanKumar",
    password : "Bhushan123"       //! if u don't give both value it is throw Error u
}



type Item = {name : string, quantity : number};
type Address = {street : string, pin : number};

type Order = {
    id : string;
    items : Item[];
    address : Address;
}



type Chai = {
    name : string;
    price : number;
    isHot : boolean
}

const updateChai = ( updates : Partial<Chai> ) => {
    console.log("Updating Chai with", updateChai);
}

updateChai({price : 25})
updateChai({isHot : false})
updateChai({})  //! But here is the problems it is allow to "EMPTY OBJECTS"



type ChaiOrder = {
    name? : string;
    quantity? : number
}

const placeOrder = (order : Required<ChaiOrder>) => {
    console.log("Order Chai with", order);
}

placeOrder({
    name : "Masala Chai",
    quantity: 2     //!  Here all field are "REQUIRED"
})



type newChai = {
    name : string;
    price : number;
    isHot : boolean;
    ingredients : string[]
}

type newChaiInfo = Pick<newChai, "name" | "price">;

const chaiInfo : newChaiInfo = {
    name : "Lemon Tea",
    price : 30      //!  Here pick some value and updates
}



type ChaiNew = {
    name : string;
    price : number;
    isHot : boolean;
    secretIngredients : string;
};

type PublicChai = Omit<ChaiNew, "secretIngredients">     //!  Here u can not pick this properties
