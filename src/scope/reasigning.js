//Using var
var firstName; //Undefined declaration
firstName = "Gerdson"; //Assigning
console.log(firstName);

var lastName = "Hernandez"; //Declaring and assignning
lastName = 'Ana'; //Reassigning
console.log(lastName);

var secondName = 'Gerdson'; //Declaring and assignning
var secondName = 'Ana' //Redeclaring and reassigning
console.log(secondName);

//Using let
let fruit = 'Apple'; //Declaring and assigning
fruit = 'Kiwi'; //Reassigning
console.log(fruit);

//let fruit = 'Banana'; //Not possible to redeclare and reassign
console.log(fruit);

//Using const
const animal = 'Dog'; //Declaring and assigning
animal = 'Cat'; //Not posssible to reassign
//const animal = 'Snake'; //Not possible to redeclare
console.log(animal); 

//Examples
const vehicles = [];
vehicles.push('Car');
console.log(vehicles);

vehicles.pop();
console.log(vehicles);