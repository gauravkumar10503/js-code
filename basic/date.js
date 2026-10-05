// Dates

let myDate=new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());

let mydate=new Date(2025, 9,7,7,27);
console.log(mydate.toLocaleString());

let myDay=new Date("2026-05-10");
console.log(myDay.toLocaleString());

let myTimeStamp=Date.now();
// console.log(myTimeStamp);
// console.log(myDay.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate=new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
