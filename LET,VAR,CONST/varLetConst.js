// * var is function-scoped while let and const are block-scoped.
// The var statement declares a variable. Variables are containers for storing information. Creating a variable in JavaScript is called "declaring" a variable:

// 'var' and 'let' can be reassigned - which is the act of setting a value at one point in time, and  then using the same variable reference and giving it a new value.

// const : const does not allow reassignment of the reference, nor does it allow the mutation(not change the value) of a   primitive.

// (1) var example : here 'var' re-assign thats why print 20 two times
function myVar() {
  var a = 10;
  if (true) {
    a = 20;
    console.log(a);
  }
  console.log(a);
}
myVar();

// (2) let example :here print 50 and 30 becoz in if block b re-assing so it is block scop thats why we can access out of
function myLet() {
  let b = 30;
  if (true) {
    let b = 50;
    console.log(b);
  }
  console.log(b);
}
myLet();

