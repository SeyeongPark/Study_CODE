test =  6;
// using test before declaring
console.log(test);
var test;

// var is hoisted
// let and const doesn't allow hoisting

// var variables can be updated and re-declared within its scope; 
// let variables can be updated but not re-declared; 
// const variables can neither be updated nor re-declared.

//             |   var  |   let  |   const  |
// ------------+--------+--------+----------+----
// updated     |    O   |    O   |     X    |
// ------------+--------+--------+----------+----   
// re-declared |    O   |    X   |     X    |
