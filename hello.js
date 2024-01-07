// Greeting the world 
console.log('Hello World!');
console.log('tada!!!');
//This is an industrial-grade general-purpose greeter function. 
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
greet("kaycee", new Date());
