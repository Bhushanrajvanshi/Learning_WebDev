//!  Type Assertion
let response : any = "42";

let numricLength : number = (response as string).length;

type Book = {
    name : string;
};

let bookString = '{"name" : "who moved my cheese"}';
let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject);

const inputElement = document.getElementById("username") as HTMLInputElement;



//! Any vs unknown
let value : any = "Bhushan";
value = [2, 6, 8, 22];
value = 2.7;
value.toUpperCase();

let newValue : unknown = "Rajvanshi";
newValue = [4, 2, 7, 8];
newValue = 3.8;
// newValue.toUpperCase();  // here give a an error
if(typeof newValue === "string"){
    newValue.toUpperCase();
}


//! try catch block
try {
    
} catch (error) {
    // console.log(error.message)  // its give error here,
    if(error instanceof Error){
        console.log(error.message)
    }
    console.log("Error : ",error);
}


const data:unknown = "Bhushan Kumar";
const strData : string = data as string;


//! Type Never
type Role = "admin" | "user" | "superadmin";

function redirectBasedOnRole(role : Role) : void {
    if(role==="admin"){
        console.log("redirect to admin dashboard");
        return;
    }
    if(role==="user"){
        console.log("redirect to user dashboard");
        return;
    }
    role;  // here never type if not exiest extra value in role
}



function neverReturn() : never {
    while(true){

    }
}