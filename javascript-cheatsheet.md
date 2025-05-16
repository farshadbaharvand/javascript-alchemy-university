# JavaScript Cheat Sheet

A beginner-friendly cheat sheet for JavaScript with detailed examples.

# JavaScript Variables Cheat Sheet

## 📝 Declaring Variables

### `var`
- Function-scoped  
- Can be **redeclared** and **updated**  
- Hoisted (initialized as `undefined`)

 var name = "John";
 

### `let`
- Block-scoped  
- Can be **updated**, but **not redeclared** in the same scope  
- Hoisted but **not initialized**

 let age = 25;
 

### `const`
- Block-scoped  
- Cannot be **updated** or **redeclared**  
- Must be initialized at declaration

 const pi = 3.14159;
 

## 🧠 Variable Scope Comparison

| Keyword | Scope          | Redeclarable | Updatable | Hoisted              |
|---------|----------------|--------------|-----------|----------------------|
| `var`   | Function Scope | ✅ Yes       | ✅ Yes    | ✅ Yes (undefined)   |
| `let`   | Block Scope    | ❌ No        | ✅ Yes    | ✅ Yes (TDZ)         |
| `const` | Block Scope    | ❌ No        | ❌ No     | ✅ Yes (TDZ)         |

> **TDZ** = Temporal Dead Zone (accessing before declaration causes `ReferenceError`)

## 🌱 Initialization & Assignment

 let city; // Declaration
city = "Paris"; // Assignment

const country = "France"; // Declaration + Assignment
 

## 📦 Primitive vs Reference Types

### Primitive (copied by value)
- String  
- Number  
- Boolean  
- Null  
- Undefined  
- Symbol  
- BigInt

 let x = 10;
let y = x; // y gets a copy of x
 

### Reference (copied by reference)
- Object  
- Array  
- Function

 const arr1 = [1, 2];
const arr2 = arr1; // arr2 points to the same array as arr1
 

## 🪄 Dynamic Typing Example

- JavaScript is dynamically typed (variable types can change)

 let data = 42; // number
data = "Hello"; // now a string
 
---

# JavaScript Data Types Cheat Sheet

## 📦 Primitive Data Types

Primitive types are immutable and compared by value.

| Data Type | Description                              | Example |
|-----------|------------------------------------------|---------|
| String    | Textual data                             | `"Hello"` |
| Number    | Numeric data (integer & floating point)  | `42`, `3.14` |
| Boolean   | Logical `true` or `false`                | `true`, `false` |
| Null      | Intentional absence of any value         | `null` |
| Undefined | Variable declared but not assigned value | `undefined` |
| Symbol    | Unique and immutable value               | `Symbol('id')` |
| BigInt    | Arbitrary-precision integer              | `12345678901234567890n` |

### Example:
  
let name = "Alice";       // String
let age = 30;             // Number
let isActive = true;      // Boolean
let salary = null;        // Null
let address;              // Undefined
const uniqueId = Symbol("id"); // Symbol
const bigNum = 9007199254740991n; // BigInt
  

## 🗃️ Reference (Non-Primitive) Data Types

Reference types store a reference to the memory location.

| Data Type | Description                        | Example |
|-----------|------------------------------------|---------|
| Object    | Collection of key-value pairs      | `{ name: "Bob", age: 25 }` |
| Array     | Ordered list of values             | `[1, 2, 3]` |
| Function  | Callable object                    | `function greet() {}` |
| Date      | Date and time                      | `new Date()` |
| RegExp    | Regular expressions                | `/abc/` |
| Map       | Collection of key-value pairs (any type of key) | `new Map()` |
| Set       | Collection of unique values        | `new Set([1, 2, 3])` |

### Example:
  
const person = { name: "Bob", age: 25 }; // Object
const numbers = [1, 2, 3];              // Array
function greet() { console.log("Hi"); } // Function
const today = new Date();               // Date
const pattern = /abc/;                  // RegExp
const map = new Map();                  // Map
const set = new Set([1, 2, 3]);         // Set
  

## 🧮 Type Checking with `typeof`

| Syntax               | Result      |
|----------------------|-------------|
| `typeof "Hello"`      | `"string"`  |
| `typeof 42`           | `"number"`  |
| `typeof true`         | `"boolean"` |
| `typeof undefined`    | `"undefined"` |
| `typeof null`         | `"object"` *(quirk)* |
| `typeof Symbol()`     | `"symbol"`  |
| `typeof BigInt(10)`   | `"bigint"`  |
| `typeof {}`           | `"object"`  |
| `typeof []`           | `"object"`  |
| `typeof function(){}` | `"function"`|

### Example:
  
console.log(typeof "Hello"); // string
console.log(typeof 42);      // number
console.log(typeof null);    // object (quirk)
  

## 📝 Notes:
- `null` is officially a primitive but `typeof null` returns `"object"` (legacy quirk).
- Arrays and Functions are technically Objects.
- Use `Array.isArray()` to check for arrays.

### Example:
  
console.log(Array.isArray([1, 2, 3])); // true
  

## ✅ Summary

- **Primitive types**: copied by value.
- **Reference types**: copied by reference.
- Use `typeof` for basic type checks.
- Use `Array.isArray()` for arrays.


---


# JavaScript Operators Cheat Sheet

In JavaScript, **operators** are special symbols or keywords used to perform operations on values.

## ✅ 1. Arithmetic Operators

| Operator | Name              | Example   | Result  |
|----------|-------------------|-----------|---------|
| `+`      | Addition           | `5 + 3`   | `8`     |
| `-`      | Subtraction        | `5 - 3`   | `2`     |
| `*`      | Multiplication     | `5 * 3`   | `15`    |
| `/`      | Division           | `10 / 2`  | `5`     |
| `%`      | Modulus (remainder)| `10 % 3`  | `1`     |
| `**`     | Exponentiation     | `2 ** 3`  | `8`     |
| `++`     | Increment          | `x++`     | `x = x + 1` |
| `--`     | Decrement          | `x--`     | `x = x - 1` |

## ✅ 2. Assignment Operators

| Operator | Example   | Same As         |
|----------|-----------|-----------------|
| `=`      | `x = y`   | Assign `y` to `x` |
| `+=`     | `x += y`  | `x = x + y`     |
| `-=`     | `x -= y`  | `x = x - y`     |
| `*=`     | `x *= y`  | `x = x * y`     |
| `/=`     | `x /= y`  | `x = x / y`     |
| `%=`     | `x %= y`  | `x = x % y`     |
| `**=`    | `x **= y` | `x = x ** y`    |

## ✅ 3. Comparison Operators

| Operator | Name                 | Example     | Result  |
|----------|----------------------|-------------|---------|
| `==`     | Equal (loose)         | `5 == '5'`  | `true`  |
| `===`    | Strict Equal          | `5 === '5'` | `false` |
| `!=`     | Not Equal (loose)     | `5 != '5'`  | `false` |
| `!==`    | Strict Not Equal      | `5 !== '5'` | `true`  |
| `>`      | Greater than          | `5 > 3`     | `true`  |
| `<`      | Less than             | `5 < 3`     | `false` |
| `>=`     | Greater or equal      | `5 >= 5`    | `true`  |
| `<=`     | Less or equal         | `3 <= 5`    | `true`  |

## ✅ 4. Logical Operators

| Operator | Name   | Example         | Result   |
|----------|--------|-----------------|----------|
| `&&`     | AND    | `true && false` | `false`  |
| `||`     | OR     | `true || false` | `true`   |
| `!`      | NOT    | `!true`         | `false`  |

## ✅ 5. Bitwise Operators

| Operator | Name        | Example     |
|----------|-------------|-------------|
| `&`      | AND         | `5 & 1`     |
| `|`      | OR          | `5 | 1`     |
| `^`      | XOR         | `5 ^ 1`     |
| `~`      | NOT         | `~5`        |
| `<<`     | Left Shift  | `5 << 1`    |
| `>>`     | Right Shift | `5 >> 1`    |
| `>>>`    | Zero-fill Right Shift | `5 >>> 1` |

## ✅ 6. Other Useful Operators

| Operator | Name                  | Example               | Result                          |
|----------|-----------------------|----------------------|---------------------------------|
| `? :`    | Ternary (Conditional)  | `isOk ? 'Yes' : 'No'` | `Yes` if isOk is true           |
| `typeof` | Type Operator          | `typeof 'Hello'`      | `'string'`                      |
| `instanceof` | Instance Check     | `x instanceof Array`  | `true` if x is an Array         |
| `in`     | Property Check         | `'length' in arr`     | `true` if arr has 'length' prop |
| `delete` | Delete property        | `delete obj.prop`     | Removes property from object    |
| `...`    | Spread/Rest            | `...array` / `...args`| Spread or collect values        |
| `??`     | Nullish Coalescing     | `value ?? 'default'`  | Returns right if left is null/undefined |

## ✅ Summary
- **Math** → `+ - * / % **`
- **Assignment** → `= += -= *=`
- **Comparison** → `== === != !== > < >= <=`
- **Logic** → `&& || !`
- **Special** → `?: typeof instanceof in delete ... ??`


# JavaScript Control Flow Cheat Sheet

## 🟢 Conditional Statements

### `if` Statement
  
if (condition) {
  // code to execute if condition is true
}
  

### `if...else`
  
if (condition) {
  // code if true
} else {
  // code if false
}
  

### `if...else if...else`
  
if (condition1) {
  // code if condition1 is true
} else if (condition2) {
  // code if condition2 is true
} else {
  // code if none are true
}
  

### `switch` Statement
  
switch (expression) {
  case value1:
    // code block
    break;
  case value2:
    // code block
    break;
  default:
    // code if no match
}
  

## 🟠 Loops

### `for` Loop
  
for (let i = 0; i < 5; i++) {
  console.log(i);
}
  

### `while` Loop
  
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
  

### `do...while` Loop
  
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
  

### `for...of` Loop (Iterates over iterable objects)
  
const arr = ['a', 'b', 'c'];
for (const item of arr) {
  console.log(item);
}
  

### `for...in` Loop (Iterates over object properties)
  
const obj = { name: "Alice", age: 25 };
for (const key in obj) {
  console.log(key, obj[key]);
}
  

## 🟡 Control Flow Keywords

| Keyword  | Description                                 |
|----------|---------------------------------------------|
| `break`  | Exits the loop or `switch` block immediately |
| `continue` | Skips current iteration & moves to next    |
| `return` | Exits from a function & returns a value     |
| `throw`  | Throws an exception                        |
| `try...catch` | Handles exceptions (errors)             |

### Example: `break` and `continue`
  
for (let i = 0; i < 5; i++) {
  if (i === 3) break;
  if (i === 1) continue;
  console.log(i);
}
// Output: 0, 2
  

## 🔴 Error Handling

### `try...catch`
  
try {
  // code that may throw an error
  nonExistentFunction();
} catch (error) {
  console.error("An error occurred:", error);
}
  

### `try...catch...finally`
  
try {
  console.log("Try block");
} catch (error) {
  console.error("Catch block");
} finally {
  console.log("Finally block always runs");
}
  

### `throw` Statement
  
function checkAge(age) {
  if (age < 18) {
    throw new Error("You must be at least 18");
  }
  return true;
}
  

## ✅ Summary
- Use `if/else` and `switch` for decision making.
- Use `for`, `while`, `do...while` loops for iterations.
- Use `break` to exit loops early, `continue` to skip iterations.
- Use `try...catch` for error handling.



# JavaScript Functions Cheat Sheet

## 🟢 Function Declaration
  
function greet(name) {
  return `Hello, ${name}!`;
}
  

## 🟠 Function Expression
  
const greet = function(name) {
  return `Hello, ${name}!`;
};
  

## 🟡 Arrow Function
  
const greet = (name) => `Hello, ${name}!`;
  

## 🟣 Anonymous Function
  
setTimeout(function() {
  console.log("This runs after 1 second");
}, 1000);
  

## 🔵 Named Function Expression
  
const factorial = function fact(n) {
  return n <= 1 ? 1 : n * fact(n - 1);
};
  

## 🟤 Immediately Invoked Function Expression (IIFE)
  
(function() {
  console.log("IIFE runs immediately!");
})();
  

## 🟢 Default Parameters
  
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}
  

## 🟠 Rest Parameters (`...args`)
  
function sum(...numbers) {
  return numbers.reduce((acc, val) => acc + val, 0);
}
  

## 🟡 Spread Operator in Function Calls
  
const nums = [1, 2, 3];
console.log(Math.max(...nums)); // 3
  

## 🟣 Function Parameters vs Arguments
- **Parameters**: Variables listed in function definition.
- **Arguments**: Actual values passed to function.

## 🔵 Callback Functions
  
function processUserInput(callback) {
  const name = prompt("Enter your name:");
  callback(name);
}

processUserInput(function(name) {
  console.log(`Hello, ${name}`);
});
  

## 🟤 Higher-Order Functions
Functions that take other functions as arguments or return functions.

  
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10
  

## 🟢 Function Scope & Closures

### Scope Example
  
function outer() {
  let outerVar = "I'm outside!";
  function inner() {
    console.log(outerVar);
  }
  inner();
}
outer();
  

### Closure Example
  
function counter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const increment = counter();
console.log(increment()); // 1
console.log(increment()); // 2
  

## 🟠 Arrow Functions vs Regular Functions

| Feature                | Regular Function | Arrow Function |
|------------------------|-----------------|----------------|
| Has own `this` context  | ✅              | ❌ (lexical `this`) |
| Can be used as constructor | ✅           | ❌              |
| Has `arguments` object  | ✅              | ❌              |

### Example:
  
function traditional() {
  console.log(this);
}

const arrow = () => {
  console.log(this);
};

traditional(); // 'this' depends on how called
arrow();       // 'this' is lexical (from surrounding scope)
  

## ✅ Summary
- Functions can be declared, expressed, or arrow functions.
- Use default parameters & rest/spread for flexibility.
- Understand scope & closures for advanced patterns.
- Arrow functions are concise but have lexical `this`.





## Loops

// For loop
for (let i = 0; i < 5; i++) {
console.log(i);
}

// While loop
let i = 0;
while (i < 5) {
console.log(i);
i++;
}

// For...of loop (arrays)
let arr = ['a', 'b', 'c'];
for (let item of arr) {
console.log(item);
}

## Functions

function greet(name) {
return `Hello, ${name}!`;
}
console.log(greet("Alice"));

## Arrow Functions

const add = (a, b) => a + b;
console.log(add(2, 3));
Arrays

let fruits = ["Apple", "Banana", "Orange"];

fruits.push("Mango"); // Add item
fruits.pop(); // Remove last item
console.log(fruits.length); // Length of array

fruits.forEach(fruit => console.log(fruit));
let upperFruits = fruits.map(fruit => fruit.toUpperCase());

# JavaScript Arrays Cheat Sheet

## 🟢 Creating Arrays

### Literal Syntax
  
const fruits = ["apple", "banana", "cherry"];
  

### Constructor Syntax
  
const fruits = new Array("apple", "banana", "cherry");
  

### Empty Array
  
const emptyArray = [];
  

## 🟠 Accessing Elements
  
console.log(fruits[0]); // "apple"
console.log(fruits[fruits.length - 1]); // "cherry"
  

## 🟡 Array Properties
| Property | Description                 |
|----------|-----------------------------|
| `.length`| Number of elements in array  |

  
console.log(fruits.length); // 3
  

## 🟣 Common Array Methods

### Add/Remove Elements
| Method        | Description                  | Example                           |
|---------------|------------------------------|------------------------------------|
| `push()`      | Add to end                   | `fruits.push("date");`             |
| `pop()`       | Remove last element          | `fruits.pop();`                    |
| `unshift()`   | Add to start                 | `fruits.unshift("kiwi");`          |
| `shift()`     | Remove first element         | `fruits.shift();`                  |
| `splice()`    | Add/Remove elements at index | `fruits.splice(1, 1, "pear");`     |
| `slice()`     | Returns shallow copy         | `const newFruits = fruits.slice(0, 2);` |

### Iteration Methods
| Method        | Description                           |
|---------------|---------------------------------------|
| `forEach()`   | Executes function on each element     |
| `map()`       | Transforms elements, returns new array|
| `filter()`    | Filters elements by condition         |
| `reduce()`    | Reduces array to single value         |
| `find()`      | Finds first element matching test     |
| `some()`      | Checks if any element matches test    |
| `every()`     | Checks if all elements match test     |

### Examples
  
fruits.forEach(fruit => console.log(fruit));

const upperFruits = fruits.map(fruit => fruit.toUpperCase());

const longFruits = fruits.filter(fruit => fruit.length > 5);

const totalLength = fruits.reduce((sum, fruit) => sum + fruit.length, 0);

const found = fruits.find(fruit => fruit.startsWith('b'));

const hasApple = fruits.some(fruit => fruit === "apple");

const allStrings = fruits.every(fruit => typeof fruit === "string");
  

### Searching & Checking
| Method        | Description                       |
|---------------|-----------------------------------|
| `indexOf()`   | Finds index of element            |
| `includes()`  | Checks if array contains element  |

  
console.log(fruits.indexOf("banana")); // 1
console.log(fruits.includes("cherry")); // true
  

### Sorting & Reversing
  
fruits.sort();   // Alphabetical sort
fruits.reverse(); // Reverse order
  

## 🔵 Spread & Rest with Arrays

### Spread Operator
  
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5];
  

### Rest Parameters
  
function sum(...nums) {
  return nums.reduce((acc, val) => acc + val, 0);
}
  

## 🟤 Destructuring Arrays
  
const [first, second] = fruits;
console.log(first);  // "apple"
console.log(second); // "banana"
  

## ✅ Summary
- Arrays store ordered collections of items.
- Use methods like `push`, `pop`, `map`, `filter`, `reduce` for common tasks.
- Destructure, spread, and rest operators simplify array handling.


# JavaScript Objects Cheat Sheet

## 🟢 Creating Objects

### Object Literal
  
const person = {
  name: "Alice",
  age: 30,
  isStudent: false
};
  

### Object Constructor
  
const person = new Object();
person.name = "Alice";
person.age = 30;
  

### Using a Function to Create Objects
  
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const alice = new Person("Alice", 30);
  

## 🟠 Accessing Properties

### Dot Notation
  
console.log(person.name); // "Alice"
  

### Bracket Notation
  
console.log(person["age"]); // 30
  

## 🟡 Adding & Updating Properties
  
person.city = "New York"; // Add
person.age = 31;          // Update
  

## 🟣 Deleting Properties
  
delete person.isStudent;
  

## 🔵 Nested Objects
  
const user = {
  id: 1,
  profile: {
    username: "alice123",
    social: {
      twitter: "@alice"
    }
  }
};

console.log(user.profile.social.twitter);
  

## 🟤 Object Methods (Functions in Objects)
  
const car = {
  brand: "Toyota",
  start: function() {
    console.log("Car started");
  }
};

car.start();
  

### Shorthand Method Syntax
  
const car = {
  brand: "Toyota",
  start() {
    console.log("Car started");
  }
};
  

## 🟢 `this` Keyword in Objects
  
const person = {
  name: "Alice",
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

person.greet();
  

## 🟠 Object Destructuring
  
const { name, age } = person;
console.log(name); // "Alice"
console.log(age);  // 31
  

## 🟡 Spread Operator with Objects
  
const newPerson = { ...person, country: "USA" };
  

## 🟣 Object.keys(), Object.values(), Object.entries()
  
console.log(Object.keys(person));   // ["name", "age", "city"]
console.log(Object.values(person)); // ["Alice", 31, "New York"]
console.log(Object.entries(person)); // [["name", "Alice"], ["age", 31], ["city", "New York"]]
  

## 🔵 Looping through Objects

### Using `for...in`
  
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
  

### Using `Object.entries()`
  
Object.entries(person).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
  

## 🟤 Checking Property Existence
  
console.log("name" in person); // true
console.log(person.hasOwnProperty("age")); // true
  

## 🟢 Object.freeze() & Object.seal()
| Method         | Description                                   |
|----------------|-----------------------------------------------|
| `Object.freeze(obj)` | Makes object immutable (no changes allowed) |
| `Object.seal(obj)`   | Prevents adding/removing props, but can modify existing values |

  
Object.freeze(person);
person.age = 40; // Won't change
  

## ✅ Summary
- Objects store key-value pairs.
- Access with dot/bracket notation.
- Use destructuring, spread, and methods for clean code.
- Iterate using `for...in` or `Object.entries()`.

# JavaScript Functions vs Objects Cheat Sheet

## 🟢 What is a Function?
- A **function** is a reusable block of code that performs a specific task.
- Can take inputs (parameters) and return outputs (return value).

### Example:
  
function greet(name) {
  return `Hello, ${name}!`;
}

const result = greet("Alice"); // "Hello, Alice!"
  

## 🟠 What is an Object?
- An **object** is a collection of key-value pairs (properties and methods).
- Represents entities with attributes and behavior.

### Example:
  
const person = {
  name: "Alice",
  age: 30,
  greet() {
    return `Hello, my name is ${this.name}`;
  }
};

console.log(person.greet()); // "Hello, my name is Alice"
  

## 🟡 Key Differences

| Feature            | Functions                                   | Objects                                         |
|--------------------|---------------------------------------------|-------------------------------------------------|
| Definition         | Block of code that performs a task          | Collection of key-value pairs                   |
| Purpose            | Executes code (action/behavior)             | Stores related data and behavior                |
| Invocation         | Called by `functionName()`                  | Access properties with `object.property`        |
| Parameters         | Accepts input parameters                   | Properties hold data (can be primitives or refs)|
| Return Value       | Can return a value                         | No direct return; used to store/manipulate data |
| Can be stored      | In variables, passed as arguments           | Stored in variables, nested in other objects    |
| Used for           | Logic, computation, callbacks              | Data modeling, representing entities            |

## 🟣 Functions Inside Objects (Methods)
- When a function is a property of an object, it is called a **method**.

  
const car = {
  brand: "Toyota",
  start() {
    console.log("Car started");
  }
};

car.start(); // Method call
  

## 🔵 Objects in Functions (Factory Functions)
- Functions can return objects (factory pattern).

  
function createUser(name, age) {
  return {
    name,
    age,
    greet() {
      return `Hi, I'm ${name}`;
    }
  };
}

const user = createUser("Bob", 25);
console.log(user.greet()); // "Hi, I'm Bob"
  

## 🟤 Functions as First-Class Citizens
- Functions can be:
  - Assigned to variables
  - Passed as arguments
  - Returned from other functions

  
const sayHello = () => console.log("Hello!");
function execute(fn) {
  fn();
}
execute(sayHello); // "Hello!"
  

## 🟢 Objects for Grouping Data
- Objects group related data together.

  
const book = {
  title: "1984",
  author: "George Orwell",
  pages: 328
};
  

## 🟠 When to Use Functions vs Objects

| Use Case                     | Functions                                 | Objects                                         |
|------------------------------|-------------------------------------------|-------------------------------------------------|
| Perform an action             | ✅                                         | ❌                                              |
| Group related data            | ❌                                         | ✅                                              |
| Reuse logic                   | ✅                                         | ✅ (via methods)                                |
| Represent real-world entity   | ❌                                         | ✅                                              |
| Return computed value         | ✅                                         | ❌ (but methods can compute values internally)  |

## ✅ Summary
- **Functions**: Do something (logic, computation, behavior).
- **Objects**: Represent something (entities, data structures).
- Combine both: objects have methods (functions) for behavior.

# JavaScript Scope & Closures Cheat Sheet

## 🟢 What is Scope?
- **Scope** determines the accessibility (visibility) of variables.
- Controls where variables/functions can be accessed.

## 🟠 Types of Scope

### 1. Global Scope
- Variables declared outside any function/block.
  
const globalVar = "I'm global";

function showGlobal() {
  console.log(globalVar);
}
  

### 2. Function (Local) Scope
- Variables declared inside a function are local to that function.
  
function greet() {
  const message = "Hello!";
  console.log(message);
}
  

### 3. Block Scope (ES6+)
- Variables declared with `let` or `const` inside `{}` are block-scoped.
  
{
  let blockVar = "I'm block scoped";
  console.log(blockVar);
}
  

## 🟡 Scope Chain
- JavaScript looks for variables in the current scope.
- If not found, it searches parent scopes up to global.
  
const outerVar = "outer";

function outer() {
  const innerVar = "inner";

  function inner() {
    console.log(outerVar); // Found via scope chain
    console.log(innerVar); // Found in parent function scope
  }

  inner();
}

outer();
  

## 🟣 What is a Closure?
- A **closure** is a function that "remembers" its lexical scope even when executed outside of it.
- Closures are created every time a function is defined.

### Example:
  
function outer() {
  const secret = "I'm a secret";

  return function inner() {
    console.log(secret);
  };
}

const revealSecret = outer();
revealSecret(); // "I'm a secret"
  

## 🔵 Practical Uses of Closures
1. **Data Privacy / Encapsulation**
  
function counter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const increment = counter();
console.log(increment()); // 1
console.log(increment()); // 2
  

2. **Function Factories**
  
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10
  

3. **Callback Functions with Preserved State**
  
function setupListener(elementId) {
  const element = document.getElementById(elementId);
  element.addEventListener('click', function() {
    console.log(`Clicked on ${elementId}`);
  });
}
  

## 🟤 Lexical Environment & Closures
- Closures retain access to:
  - Variables in their own scope.
  - Variables in outer (parent) scopes.
  - Global variables.

## 🟢 Common Closure Pitfall (with Loops)
  
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i); // Prints 3, 3, 3
  }, 1000);
}

// Fixed with let
for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i); // Prints 0, 1, 2
  }, 1000);
}
  

## ✅ Summary
- **Scope**: Controls variable accessibility.
- **Closure**: Function with access to its own, outer, and global scopes.
- Closures enable powerful patterns: data privacy, function factories, callbacks.

# JavaScript Promises & Async/Await Cheat Sheet

## 🟢 What is a Promise?
- A **Promise** represents the eventual result of an asynchronous operation.
- It can be in one of three states:
  - **Pending**: Initial state
  - **Fulfilled**: Operation completed successfully
  - **Rejected**: Operation failed

## 🟠 Creating a Promise
  
const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Promise fulfilled!");
  } else {
    reject("Promise rejected!");
  }
});
  

## 🟡 Consuming Promises
### .then() and .catch()
  
myPromise
  .then(result => {
    console.log(result); // "Promise fulfilled!"
  })
  .catch(error => {
    console.error(error); // Handles rejection
  });
  

### .finally()
  
myPromise
  .finally(() => {
    console.log("Promise settled (fulfilled or rejected)");
  });
  

## 🟣 Chaining Promises
  
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
  

## 🔵 Promise Methods

| Method                | Description                                  |
|-----------------------|----------------------------------------------|
| `Promise.all()`        | Waits for all promises to resolve            |
| `Promise.race()`       | Resolves/rejects as soon as one settles      |
| `Promise.allSettled()` | Waits for all promises to settle (no rejection shortcut) |
| `Promise.any()`        | Resolves as soon as one fulfills, ignores rejects |

### Example:
  
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);

Promise.all([p1, p2]).then(values => console.log(values)); // [1, 2]
  

## 🟤 Async/Await Syntax

### Declaring an Async Function
  
async function fetchData() {
  return "Data fetched!";
}
  

### Awaiting a Promise
  
async function getData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Finished fetching data");
  }
}
  

## 🟢 Async Arrow Functions
  
const fetchData = async () => {
  const data = await fetchSomething();
  console.log(data);
};
  

## 🟠 Combining Promise & Async/Await
  
async function run() {
  const results = await Promise.all([
    fetchData1(),
    fetchData2()
  ]);
  console.log(results);
}
  

## 🟡 Error Handling with Try...Catch
  
async function safeFetch() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error("Error occurred:", error);
  }
}
  

## ✅ Summary
- **Promise**: Handles async operations with `then()`, `catch()`, `finally()`.
- **Async/Await**: Syntactic sugar over Promises, more readable code.
- Combine with `try...catch` for clean error handling.
- Use `Promise.all()`, `race()`, `allSettled()`, `any()` for advanced workflows.


# JavaScript Events Cheat Sheet

## 🟢 What are Events?
- **Events** are actions or occurrences that happen in the browser.
- They can be triggered by user interaction or browser actions.

## 🟠 Common Event Types

| Event Type     | Description                                |
|----------------|--------------------------------------------|
| `click`        | When an element is clicked                 |
| `dblclick`     | When an element is double-clicked          |
| `mouseover`    | When the mouse pointer moves over an element |
| `mouseout`     | When the mouse pointer moves out of an element |
| `keydown`      | When a keyboard key is pressed             |
| `keyup`        | When a keyboard key is released            |
| `submit`       | When a form is submitted                   |
| `change`       | When form elements change value            |
| `input`        | When input value is modified               |
| `load`         | When a page or resource finishes loading   |
| `resize`       | When the browser window is resized         |
| `scroll`       | When the user scrolls the page             |

## 🟡 Adding Event Listeners

### Using `addEventListener`
  
const button = document.getElementById("myButton");

button.addEventListener("click", function() {
  console.log("Button clicked!");
});
  

### Arrow Function Example
  
button.addEventListener("click", () => {
  console.log("Button clicked!");
});
  

## 🟣 Removing Event Listeners
  
function handleClick() {
  console.log("Button clicked!");
}

button.addEventListener("click", handleClick);
button.removeEventListener("click", handleClick);
  

## 🔵 Event Object
- Provides details about the event (target element, type, etc.)

  
button.addEventListener("click", (event) => {
  console.log(event.target); // The clicked element
});
  

## 🟤 Event Propagation
- **Bubbling**: Event propagates from the target element up to the root.
- **Capturing**: Event propagates from the root down to the target.

  
parent.addEventListener("click", () => console.log("Parent clicked"));
child.addEventListener("click", (e) => {
  e.stopPropagation(); // Stops bubbling up
  console.log("Child clicked");
});
  

## 🟢 Event Delegation
- Using a parent element to handle events for child elements.

  
const list = document.getElementById("myList");

list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log(`Clicked on ${e.target.textContent}`);
  }
});
  

## 🟠 Prevent Default Behavior
  
const link = document.getElementById("myLink");

link.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent navigation
  console.log("Link click prevented");
});
  

## 🟡 One-Time Event Listener
  
button.addEventListener("click", () => {
  console.log("This runs only once");
}, { once: true });
  

## ✅ Summary
- Use `addEventListener()` to handle events.
- Access event details via the `event` object.
- Control propagation with `stopPropagation()`.
- Prevent default actions with `preventDefault()`.
- Use delegation for efficient event handling.
# JavaScript DOM Manipulation Cheat Sheet

## 🟢 What is the DOM?
- **DOM (Document Object Model)** is a tree-like structure representing the HTML document.
- JavaScript can access and manipulate HTML elements via the DOM.

## 🟠 Selecting Elements

| Method                           | Description                              |
|-----------------------------------|------------------------------------------|
| `document.getElementById(id)`     | Selects element by ID                    |
| `document.getElementsByClassName(class)` | Selects elements by class (HTMLCollection) |
| `document.getElementsByTagName(tag)`    | Selects elements by tag (HTMLCollection) |
| `document.querySelector(selector)`     | Selects first matching element           |
| `document.querySelectorAll(selector)`  | Selects all matching elements (NodeList) |

### Example:
  
const heading = document.getElementById("title");
const items = document.querySelectorAll(".item");
  

## 🟡 Modifying Elements

### Change Text Content
  
heading.textContent = "New Title";
  

### Change Inner HTML
  
heading.innerHTML = "<span>Updated Title</span>";
  

### Change Attributes
  
heading.setAttribute("class", "highlighted");
const value = heading.getAttribute("class");
  

### Change Styles
  
heading.style.color = "blue";
heading.style.fontSize = "24px";
  

## 🟣 Creating & Adding Elements

### Create Element
  
const newDiv = document.createElement("div");
newDiv.textContent = "Hello World";
  

### Append to Parent
  
document.body.appendChild(newDiv);
  

### Insert Before Specific Element
  
const parent = document.getElementById("container");
const child = document.getElementById("childElement");
parent.insertBefore(newDiv, child);
  

### Insert Adjacent HTML
  
child.insertAdjacentHTML('beforebegin', '<p>Inserted Paragraph</p>');
  

## 🔵 Removing Elements
  
const element = document.getElementById("toRemove");
element.remove();
  

### Remove Child Node
  
parent.removeChild(child);
  

## 🟤 Traversing the DOM

| Property                | Description                              |
|-------------------------|------------------------------------------|
| `parentElement`          | Gets the parent element                  |
| `children`               | Gets child elements (HTMLCollection)     |
| `firstElementChild`      | First child element                     |
| `lastElementChild`       | Last child element                      |
| `nextElementSibling`     | Next sibling element                    |
| `previousElementSibling` | Previous sibling element                |

### Example:
  
const listItem = document.querySelector("li");
console.log(listItem.parentElement);
console.log(listItem.nextElementSibling);
  

## 🟢 Class Manipulation

### Add / Remove / Toggle Classes
  
element.classList.add("active");
element.classList.remove("active");
element.classList.toggle("hidden");
  

### Check Class Presence
  
if (element.classList.contains("active")) {
  console.log("Element is active");
}
  

## 🟠 Event Handling on DOM Elements
  
button.addEventListener("click", () => {
  console.log("Button clicked!");
});
  

## ✅ Summary
- Select elements with `getElementById`, `querySelector`, etc.
- Modify content, attributes, and styles dynamically.
- Create, append, insert, and remove elements.
- Traverse DOM tree with parent/child/sibling properties.
- Use `classList` to manage element classes.


# JavaScript ES6+ Features Cheat Sheet

## 🟢 let & const
- `let`: Block-scoped variable (can be reassigned, not redeclared in the same scope).
- `const`: Block-scoped constant (cannot be reassigned).

  
let counter = 0;
const PI = 3.14159;
  

## 🟠 Arrow Functions
- Shorter function syntax with lexical `this` binding.

  
const add = (a, b) => a + b;

const greet = name => {
  console.log(`Hello, ${name}`);
};
  

## 🟡 Template Literals
- Multi-line strings and string interpolation using backticks.

  
const name = "Alice";
console.log(`Hello, ${name}!`);
  

## 🟣 Destructuring Assignment

### Arrays:
  
const [x, y] = [10, 20];
  

### Objects:
  
const person = { name: "Bob", age: 25 };
const { name, age } = person;
  

## 🔵 Default Parameters
  
function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}
  

## 🟤 Spread & Rest Operators

### Spread:
  
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
  

### Rest:
  
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
  

## 🟢 Enhanced Object Literals
  
const x = 10, y = 20;
const point = { x, y, move() { console.log("Moving"); } };
  

## 🟠 For...of Loop
  
const numbers = [1, 2, 3];
for (const num of numbers) {
  console.log(num);
}
  

## 🟡 Promises
  
const fetchData = () =>
  new Promise((resolve, reject) => {
    resolve("Data loaded");
  });

fetchData().then(data => console.log(data));
  

## 🟣 Async/Await
  
async function getData() {
  const data = await fetchData();
  console.log(data);
}
  

## 🔵 Modules (import/export)

// math.js
  
export const add = (a, b) => a + b;
  

// main.js
  
import { add } from './math.js';
console.log(add(2, 3));
  

## 🟤 Classes & Inheritance
  
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks`);
  }
}

const dog = new Dog("Rex");
dog.speak();
  

## 🟢 Optional Chaining (?.)
  
const user = { profile: { name: "Alice" } };
console.log(user.profile?.name);
console.log(user.address?.city); // undefined
  

## 🟠 Nullish Coalescing (??)
  
const name = null;
const displayName = name ?? "Guest";
console.log(displayName); // "Guest"
  

## ✅ Summary
- ES6+ introduced `let`, `const`, arrow functions, template literals, destructuring, spread/rest.
- Promises, async/await simplified async code.
- Modules, classes, optional chaining, nullish coalescing improved code clarity.

# JavaScript Map, Set, WeakMap, WeakSet Cheat Sheet

## 🟢 Map
- A collection of key-value pairs.
- Keys can be of any type (including objects).

### Creating a Map
  
const map = new Map();
map.set("name", "Alice");
map.set(42, "Answer");
  

### Accessing Values
  
console.log(map.get("name")); // Alice
console.log(map.has(42));     // true
  

### Iterating over a Map
  
for (const [key, value] of map) {
  console.log(`${key} => ${value}`);
}
  

### Deleting & Clearing
  
map.delete(42);
map.clear();
  

## 🟠 Set
- A collection of unique values.
- Values are stored in insertion order.

### Creating a Set
  
const set = new Set([1, 2, 3]);
set.add(4);
  

### Checking & Deleting
  
console.log(set.has(2)); // true
set.delete(2);
  

### Iterating over a Set
  
for (const value of set) {
  console.log(value);
}
  

### Clearing a Set
  
set.clear();
  

## 🟡 WeakMap
- Similar to Map but keys must be objects.
- Weak references prevent memory leaks.
- Not iterable.

### Creating a WeakMap
  
const weakMap = new WeakMap();
const obj = {};
weakMap.set(obj, "value");
  

### Accessing Values
  
console.log(weakMap.get(obj)); // value
console.log(weakMap.has(obj)); // true
  

### Deleting Entries
  
weakMap.delete(obj);
  

## 🟣 WeakSet
- Similar to Set but only stores objects.
- Weak references prevent memory leaks.
- Not iterable.

### Creating a WeakSet
  
const weakSet = new WeakSet();
const obj = {};
weakSet.add(obj);
  

### Checking & Deleting
  
console.log(weakSet.has(obj)); // true
weakSet.delete(obj);
  

## 🔵 Differences Summary

| Feature   | Map                        | Set                        | WeakMap                          | WeakSet                        |
|-----------|----------------------------|----------------------------|----------------------------------|-------------------------------|
| Key Type  | Any type                   | N/A                        | Objects only                     | Objects only                   |
| Values    | Key-Value pairs             | Unique values              | Key-Value pairs                  | Unique object references       |
| Iteration | Iterable                   | Iterable                   | Not iterable                     | Not iterable                   |
| GC-safe   | No                         | No                         | Yes (weak references)            | Yes (weak references)          |

## ✅ Summary
- **Map**: Key-value pairs with any key type.
- **Set**: Unique collection of values.
- **WeakMap**: Key-value pairs with object keys (non-iterable, garbage-collectable).
- **WeakSet**: Unique object references (non-iterable, garbage-collectable).


# JavaScript Error Handling & Try...Catch Cheat Sheet

## 🟢 What is Error Handling?
- Mechanism to catch and manage runtime errors gracefully.
- Prevents app crashes and allows recovery or user feedback.

## 🟠 try...catch Statement

  
try {
  // Code that may throw an error
  throw new Error("Something went wrong!");
} catch (error) {
  // Handle the error
  console.error("Caught an error:", error.message);
}
  

## 🟡 finally Clause
- Runs code regardless of error occurrence.

  
try {
  // Code that may throw
} catch (error) {
  console.error(error);
} finally {
  console.log("This runs no matter what");
}
  

## 🟣 throw Statement
- Used to create custom errors.

  
function checkAge(age) {
  if (age < 18) {
    throw new Error("Underage!");
  }
  return "Access granted";
}

try {
  console.log(checkAge(15));
} catch (e) {
  console.error(e.message);
}
  

## 🔵 Error Types
| Type                 | Description                          |
|----------------------|------------------------------------|
| `Error`              | Generic error                      |
| `SyntaxError`        | Code syntax mistake                |
| `ReferenceError`     | Using undeclared variable          |
| `TypeError`          | Invalid data type usage            |
| `RangeError`         | Number out of range                |
| `EvalError`          | Error related to `eval()`          |
| `URIError`           | Malformed URI handling             |

## 🟤 Custom Error Classes

  
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

try {
  throw new ValidationError("Invalid input!");
} catch (e) {
  console.log(e.name);    // ValidationError
  console.log(e.message); // Invalid input!
}
  

## 🟢 Async Error Handling

### Using try...catch with async/await
  
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Fetch failed:", error);
  }
}
  

### Using .catch() with Promises
  
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Fetch failed:", error));
  

## ✅ Summary
- Use `try...catch` to catch runtime errors.
- Use `finally` to run cleanup code.
- Use `throw` to create custom errors.
- Handle async errors with `try...catch` or `.catch()`.
- Create custom error classes by extending `Error`.

# JavaScript Classes & Inheritance Cheat Sheet

## 🟢 Classes

- Syntax sugar over JavaScript’s prototype-based inheritance.
- Used to create objects with shared methods and properties.

  
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const alice = new Person("Alice", 30);
alice.greet(); // Hello, my name is Alice
  

## 🟠 Inheritance with `extends`

- Create a subclass that inherits from a parent class.

  
class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age);  // Call parent constructor
    this.jobTitle = jobTitle;
  }

  describe() {
    console.log(`${this.name} is a ${this.jobTitle}`);
  }
}

const bob = new Employee("Bob", 35, "Developer");
bob.greet();      // Hello, my name is Bob
bob.describe();   // Bob is a Developer
  

## 🟡 Method Overriding

- Subclass can override parent methods.

  
class Dog {
  speak() {
    console.log("Dog barks");
  }
}

class Beagle extends Dog {
  speak() {
    console.log("Beagle howls");
  }
}

const snoopy = new Beagle();
snoopy.speak();  // Beagle howls
  

## 🟣 Static Methods

- Methods callable on the class itself, not instances.

  
class MathUtil {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtil.add(5, 3)); // 8
  

## 🔵 Getters and Setters

- Control access to object properties.

  
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  set width(value) {
    if (value <= 0) throw new Error("Width must be positive");
    this._width = value;
  }

  get width() {
    return this._width;
  }
}

const rect = new Rectangle(10, 5);
console.log(rect.area);  // 50
rect.width = 15;
console.log(rect.area);  // 75
  

## 🟤 Private Fields (ES2022)

- Fields that are not accessible outside the class.

  
class Counter {
  #count = 0;

  increment() {
    this.#count++;
  }

  getCount() {
    return this.#count;
  }
}

const c = new Counter();
c.increment();
console.log(c.getCount()); // 1
// console.log(c.#count); // SyntaxError: Private field
  

## 🟢 Summary
- Use `class` to define blueprints for objects.
- Use `extends` and `super()` for inheritance.
- Override methods for polymorphism.
- Use static methods for utility functions.
- Use getters/setters for property control.
- Use private fields (`#`) for encapsulation.


# JavaScript Modules Cheat Sheet

## 🟢 What are Modules?
- Modules allow you to break JavaScript code into separate files.
- Each module can export variables, functions, or classes.
- Other modules can import these exports.
- Helps organize code and avoid global namespace pollution.

## 🟠 Exporting

### Named Exports
  
// math.js
export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}
  

### Default Export
  
// logger.js
export default function log(message) {
  console.log(message);
}
  

## 🟡 Importing

### Import Named Exports
  
import { PI, add } from './math.js';

console.log(PI);
console.log(add(2, 3));
  

### Import Default Export
  
import log from './logger.js';

log("Hello world");
  

### Import All as Namespace
  
import * as math from './math.js';

console.log(math.PI);
console.log(math.add(5, 6));
  

## 🟣 Renaming Imports/Exports

### Rename import
  
import { add as sum } from './math.js';

console.log(sum(1, 2));
  

### Rename export
  
const subtract = (a, b) => a - b;
export { subtract as diff };
  

## 🔵 Dynamic Imports (ES2020)
- Import modules asynchronously at runtime.

  
async function loadModule() {
  const module = await import('./math.js');
  console.log(module.add(10, 20));
}

loadModule();
  

## 🟤 Module Scope
- Variables/functions/classes declared in a module are scoped to that module.
- They don’t pollute the global scope.

## 🟢 Using Modules in HTML
- Use `<script type="module">` tag.

  
<script type="module" src="main.js"></script>
  

## ✅ Summary
- Use `export` to share code from a module.
- Use `import` to use exported code.
- Modules are file-based and scoped.
- Default export allows one main export per module.
- Named exports allow multiple exports.
- Dynamic imports enable lazy loading.


