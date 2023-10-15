const user = {
  userName: "Mijbha",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.userName} , welcome to website`);
    console.log(this);
  },
};
// user.welcomeMessage()
user.userName = "seju";
// user.welcomeMessage()

// console.log(this);

function thinkJustThis() {
    let userName = "Mijbah"
    console.log(this.userName);  // undefined
}
// thinkJustThis()

const thinkJustThis = () => {
    let userName = "Mijbah"
    console.log(this.userName);  // undefined
console.log(this);  // {}
}
// thinkJustThis()



// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

//  const addTwo = (num1, num2) => (num1 + num2)  // mplicit return  | () => ()


const addTwo = () => ({userName:"mijbah"})  // object write in array function

// const addTwo = ((userName)=>{
//   console.log(userName);
// })("Mijbah")
 
console.log(addTwo());
