function makeTea(type:string, cups:number){
    console.log(`Making ${type} cups of ${cups}`);
}
makeTea("Lemon Tea", 2);



function getTeaPrice(price:number) : number {
    return price;
}
getTeaPrice(20);



function makeOrder(order : string){
    if(!order) return null;
    return order;
}



function logChai() : void{
    console.log("Chai is Ready!");
}



function orderChai( type? : string){
    console.log(type);
}



function orderTea( type : string = "Lemon"){

}



function createChai(order : {
    type : string;
    suger : number;
    size : "small" | "large";
}){
    return 25
}