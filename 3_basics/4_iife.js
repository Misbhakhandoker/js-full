// Immediately Invoked Function Expressions (IIFE)


(function coffee(){
    // name IIFE
    console.log(`Cold Coffee`);
})();

( (name) => {
    // unName IIFE
    console.log(`two time call Cold Coffee  ${name}`);
})("Mijbah")