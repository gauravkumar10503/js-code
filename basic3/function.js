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
console.log(loginUserMessage("Gaurav"));

