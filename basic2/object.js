//singleton
//Object.crete

//object literals

const mySym=Symbol("key1");
const jsUser={
    name:"God",
    age:100,
    location:"kelash",
    email:"godcreate@gmail.com",
    isLoggedIn:false,
    lastLogin:["monday","Friday"],
    [mySym]: "mysym1"
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser[mySym]);

// jsUser.age=1000;    //we're updating the value here
// Object.freeze(jsUser);  //here we're freezing the object, it work just like final keyword
// jsUser.age=2000;
// console.log(jsUser);    //here we're printing the whole object content

jsUser.greeting=function(){
    console.log(`hello js user, ${this.name}`);
}

console.log(jsUser.greeting());