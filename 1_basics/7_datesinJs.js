// Dates

let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString()); // ***
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());  // ***
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);


// let myCreatedDate = new Date(2023,9,10) // Tue Oct 10 2023
// let myCreatedDate = new Date(2023,9,10,5,3) // 10/10/2023, 5:03:00 AM  
// let myCreatedDate = new Date("2023-01-14") // 1/14/2023, 6:00:00 AM  
let myCreatedDate = new Date("01-14-2023") // 1/14/2023, 12:00:00 AM
// console.log(myCreatedDate.toLocaleString()); 

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());



// console.log(Date.now() / 1000);
// console.log(Math.floor(Date.now() / 1000)); // sec


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);


// `${newDate.getDay()} and the time ${newDate.getTime()}`


newDate.toLocaleString('default', {
    weekday:"long",
})