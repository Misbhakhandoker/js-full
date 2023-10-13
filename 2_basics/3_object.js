// singleton
// Object.create

const mySym = Symbol("key1");

// object literals
const JsUser = {
  name: "Mijbah",
  age: 22,
  "full Name": "Mijbah Khandker",
  [mySym]: "myKey1",
  location: "Dhaka",
  email: "mijbah@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Sunday", "Friday"],
};


// console.log(JsUser.email);
// console.log(JsUser["email"]);

// console.log(typeof JsUser[mySym]);
// console.log(JsUser["full Name"]);

JsUser.email = "mijbah.com";

// Object.freeze(JsUser)   // freeze object
JsUser.email = "kayes.com";

// console.log(JsUser.email);

// console.log(JsUser);

JsUser.greeting = function () {
  return "Hello World";
};
JsUser.greetingTwo = function () {
  return `Hello Js user ${this.name}`;
};
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());



const mySym2 = Symbol("🚀");

const myOBJ = {
  name: "Mijbah",
  age: 22,
  [mySym2]: "X express",
};

// console.log(mySym2);
// console.log(myOBJ);
// console.log(myOBJ[mySym2]);
