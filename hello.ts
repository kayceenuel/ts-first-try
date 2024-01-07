// Greeting the world 
console.log('Hello World!');


console.log('tada!!!')

//error code 
//This is an industrial-grade general-purpose greeter function. 
function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
  }
   
  greet("kaycee", new Date());

//error code 
  let msg = "hello there!";
    
    let msg: string

//working
    "use strict"; 
    function greet (person, date) {
        console.log("Hello" .concat (person, ", today is").concat(date.toDateString(),"!"));

    }
    greet("kaycee", new Date());