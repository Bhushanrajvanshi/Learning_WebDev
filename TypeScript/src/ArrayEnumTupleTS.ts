//?  Array
const chaiFlavours : string[] = ["Masala", "Adrak"];
const chaiPrice : number[] = [5, 7, 2, 8, 12];

const rating:Array<number> = [4.5, 5, 7.5, 10];

type Chai = {
    name : string;
    price : number;
}
const menu : Chai[] = [
    {name : "Masala", price : 20},
    {name : "Adrak", price : 25}
]

const cities : readonly string[] = ["Aurangabad", "Bihar", "India"];
// cities.push["Delhi", "Mumbai"]    //! don't update value after adding some due to readonly

const table : number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
] 



//?  Tuple
let chaiTuple : [string, number];
chaiTuple = ["Bhushan", 20];
chaiTuple = ["Kumar", 15];
// chaiTuple = [25, "Rajvanshi"]  //! don't allow to do like this 

let userInfo : [string, number, boolean?];
userInfo = ["Bhushan", 100];
userInfo = ["Bhushan", 150, false];

const location : readonly [number, number] = [28.66, 32.22];  //! now you know don't change this value

const chaiItems : [name:string, price:number] = ["Bhushan", 30];



//? Enum
enum cupSize {
    SMALL,
    MEDIUM,
    LARGE
}
const size = cupSize.LARGE

enum Status {
    PENDING = 100,
    SERVED, //101
    CANCELLED,  //102
};


enum chaiType {
    MASALA = "masala",
    GINGER = "ginger"
}

function makeChai(type : chaiType){
    console.log(`Making : ${type}`);
}

makeChai(chaiType.MASALA);
// makeChai("ginger");     //! don't allow pass the value directly with enum type


enum RandomNum {
    ID = 1,
    NAME = "Bhushan"
}   //!  don't write this way with differnt type of value


const enum Sugars {
    LOW = 1,
    MEDIUM = 2, 
    HIGH = 3,
}
const s = Sugars.HIGH;

let t : [string, number] = ["chai", 100];
t.push("extra");
