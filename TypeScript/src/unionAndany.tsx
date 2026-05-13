//!  Union
let subs : number | string = "1M";

let apiRequestStatus : "pending" | "success" | "error" = "success";

let airlineSeat : "aisle" | "middle" | "window" = "window";
airlineSeat = "middle";



//!  Any
let orders = ["12", "20", "28", "42"];

let currentOrder : string | undefined

for(let order of orders){
    if(order==="20"){
        currentOrder = order;
        break;
    }
    currentOrder = "10";
}

console.log(currentOrder);