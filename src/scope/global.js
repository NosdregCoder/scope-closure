//Variables

var a; //Declaring variable
var b = 'b'; //Declaring and assigning
b = 'bb'; //Reasigning
var a = 'aa'; //Redeclaring

//Global scope
var fruit = 'Apple'; //Global
console.log(fruit);

function bestFruit(){
    console.log(fruit);
}

bestFruit();

function countries(){
    country = 'Colombia';
    console.log(country);
}

countries();
console.log(country);