
// 1. What is the difference between null and undefined?
// ANS:  Difference Between null and undefined:
// undefined: A variable that has been declared but not yet assigned a value is undefined. It is the default value for uninitialized variables and function parameters.

// How it occurs:
// 1. When a variable is declared but not initialized:
let x;
console.log(x); // undefined

// 2. When a function doesn’t explicitly return a value:
function greet() { }
console.log(greet()); // undefined

// 3. Accessing properties on objects that don’t exist:
let person = { name: 'John' };
console.log(person.age); // undefined

// null: A variable explicitly assigned null is considered to be empty or non-existent. It’s an intentional absence of value, often used to signify that a variable should be empty or is yet to be filled.

// How it occurs:
// A developer explicitly assigns null to indicate that the variable should be empty:

let y = null;
console.log(y); // null


<img src="img\undefine&null.jpg" alt="Mountain View" style="width:304px;height:228px;" />

