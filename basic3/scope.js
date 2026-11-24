//var x=100;
let a=200;

if(true){
    //var x=10;
    let a=20;
    const b=30;
    //console.log("Inner : ",a);
}

//console.log(a);

function one(){
    const username="gaurav";

    function two(){
        const website="youtube";
        console.log(username);
    }
    two();
}

//one();

if(true){
    const username="Gaurav";
    if(true){
        const website="facebook";
        //console.log(username+" "+website);
    }
}

console.log(addone(5)); //supported

function addone(num){
    return num+1;
}

//console.log(addtwo(5)); not supported
const addtwo=function (num){
    return num+2;
}
console.log(addtwo(5));

