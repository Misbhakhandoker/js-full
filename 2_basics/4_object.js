// const tinderUser = new Object(); // single tramObject
const tinderUser = {}; // non single tramObject

tinderUser.id = 1;
tinderUser.name = "Mijbha";
tinderUser.isLoggedIn = false;

const regularUser = {
  fullName: {
    userFullName: {
      firstName: "Mijbah",
      lastName: "Khandker",
    },
  },
};
// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2);

const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "mijbha.com",
  },
  {
    id: 2,
    email: "misbha.com",
  },
  {
    id: 3,
    email: "kayes.com",
  },
];

users[1].email;
// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); //database working time convert array
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); // array in array property

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename : "Js in bangla",
    price: "999",
    courseInstructor: "mijbha"
}
// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
// console.log(instructor);

[
    {
        "name":"mijbah",
        "age":22,
    }
]
