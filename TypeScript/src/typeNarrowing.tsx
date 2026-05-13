function getChai(kind : string | number){
    if(typeof kind === "string"){
        return `Making a cup of ${kind} tea.`;
    }
    return `Chai order ${kind}`;
}

function serveChai(msg?:string){
    if(msg){
        return `Serving ${msg}`
    }
    return `Serving default masala chai`
}


function orderChai(size: "small" | "medium" | "large" | number){
    if(size==="small"){
        return `small cutting chai`;
    }
    if(size==="medium" || size==="large"){
        return `serve extra chai`;
    }
    return `chai order #${size}`;
}


class KulhadChai{
    serve(){
        return `serving kulhad chai`
    }
}
class CuttingChai{
    serve(){
        return `serving cutting chai`
    }
}


function serve(chai : KulhadChai | CuttingChai){
    if(chai instanceof KulhadChai){
        return chai.serve();
    }
}

type ChaiOrder = {
    type : string
    sugar : number
}

function isChaiOrder(obj : any) : obj is ChaiOrder{
    return (
        typeof obj === "object" && 
        obj !== null && 
        typeof obj.type === "string" && 
        typeof obj.suger === "number"
    )
}

function serveOrder(item:ChaiOrder | string) {
    if(isChaiOrder(item)){
        return `Serving ${item.type} chai with ${item.sugar} sugar`
    }
    return `Serving custom chai: ${item}`
}


type MasalaChai = {type: "masala"; spicelevel: number};
type GingerChai = {type: "ginger"; amount: number};
type ElaichiChai = {type: "elaichi"; aroma: number};

type Chai = MasalaChai | GingerChai | ElaichiChai;

function makeChai(order: Chai){
    switch (order.type) {
        case "masala" : 
            return `Masala Chai`
            break;

        case "ginger" : 
            return `Ginger Chai`
            break;

        case "elaichi" : 
            return `Elaichi Chai`
            break;
    }
}


function brew(order : MasalaChai | GingerChai) {
    if( "spicelevel" in order) {
        // order is MasalaChai
        return `Brewing Masala Chai with spice level ${order.spicelevel}`;  // ai sujetion
    }
}

function isStringArray(arr:unknown) : arr is string[] {
    return Array.isArray(arr) && arr.every(item => typeof item === "string");  // ai sujetion
}