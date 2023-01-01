// Hoisting is the default behavior of javaScript where all the variable and function declaration are move to the top before the excution.

// example of variable
a = 10;
console.log(a); // return 10;
var a;

// example 2
var b;
console.log(b); // undefine becoz initilazation are not hoisted
b = 20;

// example 3

// c = 10;
// console.log(c); // error becoz let are not hoisted to the top
// let c;

// function example // function decleration

host();
function host() {
  console.log("furkan"); // return furkan becoz function decleration are support hosting
}

// example 2
init();
var name = "masai";
function init() {
  console.log(name); // return undefine becoz we call the function before the variable initialization
}

// example 3
var otherName = "Masai School";
init2();
function init2() {
  console.log(otherName); // return Masai School
}
