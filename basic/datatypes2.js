/* Primitive datatypes
7 types :- String, Number, Boolean, null, undefined, Symbol, BigInt
*/

const score=100;
const scoreValue=100.3;
const isLoggedIn=false;
const outSideTemp=null;
let userEmail;

const id=Symbol('123');
const anotherId=Symbol('123');
console.log(id);
console.log(anotherId);
console.log(id === anotherId);

const bigNumber=1234567890098765432n;

/* Referenece (Non Primitive)
Arrays, Objects, Function
*/

const heros=["shakiman", "ironman", "loki", "thor"];
let myObj={
    name:"hulk",
    age:40,
}

const myFunction = function(){
    console.log("hello world");
}