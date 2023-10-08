// Primitive

// 7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123') // symbol same but different value

console.log(id === anotherId);  // false

const bigNumber = 31344894548945564n



// Reference (Non primitive )

// Array,Objects, Function

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Mijbah",
    age:22,
}

const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof myFunction);


// https://262.ecma-international.org/5.1/#sec-11.4.3  

// search keywords => The typeof Operator