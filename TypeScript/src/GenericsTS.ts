function wrapInArray<T> (item : T) : T[]{
    return [item]
}

wrapInArray("masala");
wrapInArray(42);
wrapInArray({flavour: "lemon"});



function pair<A, B> (a : A, b : B) : [A, B]{
    return [a, b];
}

pair("masala", 25);
pair("lemon", {flavour : "masala"});



interface Box<T> {
    content : T
}

const numberBox : Box<number> = {content : 10};
const numberBoxCup : Box<string> = {content : "Bhushan"}



interface ApiPromise<T>{
    status : number,
    data : T
}

const res : ApiPromise<{flavour : string}> = {
    status : 200,
    data : {flavour : "Masala"}
}