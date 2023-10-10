const name = "mijbah"
const repoCount = 50

// console.log(name + repoCount + "Khandker");


// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("valo-gta-csgo")

// console.log(gameName[0]);
// console.log(gameName.__proto__); 

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));  // valo... => l
// console.log(gameName.indexOf("l")); // valo... => 2

// const newString = gameName.substring(0,4)
// const newString = gameName.slice(-6,5)
// console.log(newString);


// const newStringOne  =  "        mijbah           "
// console.log(newStringOne);
// console.log(newStringOne.trim());


const url = "https://mijbah.com/mijbah%20coffeecode"

console.log(url.replace('%20', '-'));

console.log(url.includes('mijbah')); // string find

console.log(gameName.split('-'));  // new String("valo-gta-csgo")