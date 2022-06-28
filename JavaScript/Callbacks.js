// A callback function can be defined as a function passed into another function as a parameter

// function
function greet (name, callback) {
    console.log('Hi ', name);
    callback();
}

// callback function
function callMe() {
    console.log("It's callback function");
}

greet('Tom', callMe);


// Hi  Tom
// It's callback function