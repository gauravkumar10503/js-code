const user={
    username:"gaurav",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);;
        //console.log(this);
    }
}

// user.welcomeMessage();
// user.username="sam";
// user.welcomeMessage();
//console.log(this);


// function one(){
//     let username="gaurav";
//     console.log(this.username);
// }

// const one=function(){
//     let username="gaurav";
//     console.log(this.username);
// }

const one=()=>{
    let username="gaurav";
    console.log(this.username);
}

//one()

//const addTwo=(num1, num2)=> num1+num2
//const addTwo=(num1, num2)=>(num1+num2)
//const addTwo=(num1, num2)=>({username:"gaurav"})

const addTwo=(num1, num2)=>{
    return num1+num2;
}
console.log(addTwo(2,4));

