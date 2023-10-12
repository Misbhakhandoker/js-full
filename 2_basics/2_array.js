const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc = ["superman","flash", "batman"]
// marvel_heros.push(dc)
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc)
const allHeros = [...marvel_heros,...dc]
// console.log(allHeros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);




// console.log(Array.isArray("Mijbha"));
// console.log(Array.from("Mijbah")); // array in convert
// console.log(Array.from({name:"mijbah"}));  // interesting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));  //  Returns a new array from a set of elements.