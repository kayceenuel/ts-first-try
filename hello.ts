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

    //Using the type `any`
    //You can use this type whenever you don't want a particular value to cause typecheking.

    let obj: any = {x : 0};
    //None of the following lines of code will throw compiler errors.
    //Using `any` will disables all further type checking and it is assumed
    //You know the environment better than TypeScript. 

    obj.foo(); 
    obj();
    obj.bar = 100;
    obj = 'Hello World!';
    const n: number = obj;

    /** The any type is useful when you don’t want to write out a long type 
     * just to convince TypeScript that a particular line of code is okay. */

    //Type annotation on variables.  
    let myName: string = "Kaycee"
    /** When you declare a variable using const, var, or let, you can optionally add a type annotation
     *  to explicitly specify the type of the variable: */

    //FUNCTIONS 
    // 'it is the means of passing data around of javascript. `TypescriptTypeScript allows you to specify the types of both the input and output values of functions.`'

    //Parameter Type Annotations
   /** When you declare a function, you can add type annotations after each parameter to declare what types of parameters the function accepts. 
    * Parameter type annotations go after the parameter name: */ 
   function greeet (name: string) {
    console.log("hello, " + name.toUpperCase() + "!!")
   }
    greet(43); // runtime error;