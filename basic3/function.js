function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}
//addTwoNumbers(3,4)

function add(num1, num2){
    let result=num1+num2;
    return result;
}

const output=add(2,5);
//console.log("Result ", output);

function loginUserMessage(username="sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("Gaurav"));

function calculate(...num){
    return num;
}
//console.log(calculate(200,300,400));
 const user={
    username: "anku",
    price: 100
 }
 function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
 }
 handleObject(user);

const myNewArray = [200,4004,550]

function returnSecondValue(getArray)
{
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));

