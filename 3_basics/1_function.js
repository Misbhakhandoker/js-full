function sayMyName() {
  console.log("M");
  console.log("i");
  console.log("j");
  console.log("b");
  console.log("a");
  console.log("h");
}
// sayMyName()

function addTwoNumber(number1, number2) {
  // let result  = number1 + number2
  return number1 + number2;
  console.log("mijbah");
}
const result = addTwoNumber(5, 3);

// console.log("Result: ", result);

function loginUserMessage(username = "jon") {
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}
// console.log(loginUserMessage("mijbah"));




function calculateCartPrice(var1,var2,...num1){
    return num1
}

// console.log(calculateCartPrice(200,300,400,500,1000));

const user = {
    username: "mijbah",
    price: 199
}

function handleObject(anyObject){
    return `userName is ${anyObject.username} and price is ${anyObject.price}`
}

// console.log(handleObject({
//     uesrname:"sam",
//     price:399
// }));

const myNewArray = [200,400,100.600]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,100.600]));