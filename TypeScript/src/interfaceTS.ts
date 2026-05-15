function makeChai(order: {type:string; suger:number; strong: boolean}) {
    console.log(order);
}

function serveChai(order: {type:string; suger:number; strong:boolean}) {
    console.log(order);
}



//! inspite of doing this
type orderChai = {
    type: string;
    suger: number;
    strong: boolean
}

function makeTea( order: orderChai){
    console.log(order);
}

function serveTea(order: orderChai){
    console.log(order);
}



type TeaRecipe = {
    water : number;
    milk : number
};

class masalaChai implements TeaRecipe {
    water = 100;
    milk = 50;
}



interface cupSize {
    size : "small" | "large";
}

class Chai implements cupSize { 
    size : "small" | "large" = "large";
}

// type Response = {ok: true} | {ok: false}
// class myRes implements Response{
//     ok : boolean = true;
// }



type TeaType = "masala" | "ginger" | "lemon";   //! this an union type or literal type
function orderChai(Tea : TeaType){
    console.log(Tea);
}



type BaseChai = {teaLeaves : number};
type Extra = {masala : number};

type masalaTea = BaseChai & Extra;

const cup: masalaTea = {
    teaLeaves : 2,
    masala : 1
}



type User = {
    username : string,
    bio?: string
};

const u1 : User = {username : "Bhushan"};
const u2 : User = {username : "Bhushan", bio: "Aurangabad, Bihar"};



//! readOnly
type Config = {
    readonly appName : string,
    version : number,
};

const cfg : Config = {
    appName : "TypeScript",
    version : 1
};

// cfg.appName = "JavaScript";  //! here never change value due to readonly
cfg.version = 2;