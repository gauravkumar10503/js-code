const name="hello";
const repoCount=25;

//console.log(name+repoCount+" values");
console.log(`${name} is my name and my repo count is ${repoCount}`);

const gameName=new String ("Hello");

console.log(gameName[0]);
console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
console.log(gameName.indexOf('l'));

const newString=gameName.substring(0,3);
console.log(newString);

const anotherString=gameName.slice(-5,3);
console.log(anotherString);

const newString1="   hello  ";
console.log(newString1);
console.log(newString1.trim());

const url="https://google%20.com";
console.log(url.replace('%20','-'));
console.log(url.includes('sunder'));

