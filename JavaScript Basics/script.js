// word vs keyword

// abc = word
// for = keyword

// harsh = 

// Hoisting
console.log(a); 
var a = 10;
console.log(a);

// types in js
//premitive and referance
// primitive = string, number,

//premitive
var a = 12;
var b = a;
console.log("a = " + a);
console.log("b = " + b);

b = b + 2;

console.log("a = " + a);
console.log("b = " + b);

//referance

var x = [1, 2, 3, 4];
var y = x;
console.log("x = " + x)
console.log("y = " + y)
y.push(5);
console.log("x = " + x)
console.log("y = " + y)

//Conditionals - if else else-if

// Array :
console.log("--------------Normal array-------------");
arr = [1, 2, 3, 4, 5, 6, 7];
console.log("arr = " + arr);
console.log("--------------insert a value at end--------------");
arr.push(8);
console.log("arr = " + arr);
console.log("--------------remove a value from end--------------");
arr.pop();
console.log("arr = " + arr);
console.log("--------------insert a value at start--------------");
arr.unshift(0);
console.log("arr = " + arr);
console.log("--------------remove a value from start--------------");
arr.shift();
console.log("arr = " + arr);
console.log("--------------remove a value from an index to a perticuler length--------------");
arr.splice(2, 2)
console.log("arr = " + arr);

// Object
// Blank Object
var obj = {}

console.log("obj = " + obj);

var Employee = {
    firstName: "Anusruta",
    lastName: "Dutta",
    organigation: "WiseTech Global",
    designation: "Software Engineer",
    Call: function() {
        return "Hi, I am " + this.firstName + " " + this.lastName + " working at " + this.organigation + " as " + this.designation + ".";
    }
};

console.log(Employee.Call());

