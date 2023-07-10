// What is the difference between var const and let?

// Javascript has two versions ES5 and ES6
// ES5 -> older
// ES6 -> newer
// var was there in ES5
// var is function scoped
// var can be use any where in it's parent function
function fun() {
  for (var i = 0; i < 12; i++) {
    console.log("inside loop -> i = " + i);
  }
  console.log("outside loop -> i = " + i);
}

fun();

// Var Add itself to the window objecrt
var a = 12;
var b = 15;
// var c = 20;
// let and const cames in ES6
// let is braces scoped

function fun2() {
  for (let i = 0; i < 12; i++) {
    console.log("inside loop -> i = " + i);
  }
  //console.log("outside loop -> i = " + i);
}

fun2();

// let does not add
let c = 20;
/*
There are many features in JavaScript, but there are also features that are not present in JavaScript. 
However, we can still utilize those features because JavaScript can access them through the Window object. 
The Window object serves as a container of features provided by the browser.
*/

// Stack Memory
// Heap Memory
// the datas what we create those are stored in heap memory

// Execution context
/*
When a function begins execution, it simultaneously generates an imaginary container 
referred to as the execution context. This execution context encompasses three vital 
components:

1) Variables: These are the declared variables within the function, which store and 
manipulate data during its execution.

2) Functions nested within the parent function: These are sub-functions defined within the 
parent function, which can be accessed and utilized during the execution of the parent 
function.

3) The Lexical Environment of the Function: The lexical environment provides information 
about the scopes and accessibility of variables and functions within the function. It helps 
determine how variables and functions are defined, accessed, and interact within the 
function.

By establishing the execution context, the function effectively manages and accesses the 
required variables, functions, and lexical environment, enabling smooth execution and 
control flow.
*/

// Lexical Environment
/*
The Lexical Environment is a fundamental concept in JavaScript that helps determine how 
variables and functions are accessed and interact within a particular scope. It provides 
a way to track and manage the identifiers (variables and function names) defined within 
a block of code, such as a function or a block statement.

The Lexical Environment consists of two main components:

1) Environment Record: It is a record or a storage space that holds all the variables and 
their corresponding values within a specific scope. It also includes any function declarations 
and their associated function objects. The environment record acts as a lookup table for 
variables and functions.

2) Outer Environment Reference: This references the outer or parent scope's lexical environment. 
It allows for variable and function lookup in the higher-level scope, which is the scope outside 
of the current scope. This enables nested scopes to access variables and functions defined in 
their parent scopes.

When JavaScript code is executed, the Lexical Environment is created for each scope encountered. 
Each time a function is invoked, a new Lexical Environment is created to store the function's 
variables and inner functions.

The Lexical Environment is crucial for determining variable scope and visibility. It helps resolve 
variables and functions based on their lexical (or static) position in the code, rather than their 
runtime position. This means that variables and functions are accessed based on where they are 
defined in the code, not where they are called or executed.

In summary, the Lexical Environment is a mechanism that provides the necessary information for 
variable and function lookup and resolution within different scopes in JavaScript. It ensures 
proper scoping rules are followed and allows for the correct retrieval and manipulation of data 
during program execution.
*/

// How to copy referance values?
var arr1 = [1, 2, 3, 4, 5];
var arr2 = [...arr1];

console.log("-----------------Before pop------------------");         
console.log("arr1 = " + arr1);
console.log("arr2 = " + arr2);
arr2.pop()
console.log("-----------------After pop------------------");
console.log("arr1 = " + arr1);
console.log("arr2 = " + arr2);

var obj1 = {
    name : "Akash"
};

var obj2 = {...obj1};

console.log("-----------------Before change the name------------------");
console.log("obj1.name = " + obj1.name);
console.log("obj2.name = " + obj2.name);

obj2.name = "Akanksha";

console.log("-----------------After Change the name------------------");

console.log("obj1.name = " + obj1.name);
console.log("obj2.name = " + obj2.name);


// truthy vs falsy
/*
every value we use in JavaScript are one of two types, one is truthy another is falsy

falsy values are => 0, false, undefined, null, NaN, document.all
*/
if(5){
    console.log("Hey");
}
else{
    console.log("Hello");
}

// foreach forin do-while
/*
forEach is used only for array
*/

var arr = [1,2,23,45,56,89,72,53,6,39,45,82,12];

arr.forEach(function(val){
    console.log(val + 2);
});

// for use loop in object we use forin
var obj = {
    name: "Ashish",
    age: 24,
    city: "Bangalore"
}

for(var key in obj){
    console.log(key + " = " + obj[key]);
}

//do-while
var l = 12;
do {
    console.log("hay " + l);
    l++;
}while(l < 15);

//callback function
setTimeout(() => {
   console.log("Hello") 
}, 5000);

/*
the code which runns leter to thows we can put in a function
*/

function doSomething(callback) {
    // Perform some task
    
    // Call the callback function
    callback();
  }
  
  function callbackFunction() {
    console.log("Callback function executed!");
  }
  
  // Pass the callback function as an argument
  doSomething(callbackFunction);


  // First class functions

function abcd(a){
    a();
}

abcd(function(){console.log("hello this is firstclass function");});