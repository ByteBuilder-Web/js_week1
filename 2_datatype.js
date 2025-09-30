// Data Types in JavaScript 
// In Javascript there are 2 main Data types
// 1. Primitive Data Types
// 2. Non-Primitive Data Types

                                        // Primitive Data Types
// 1. Number
   const a = 12; 
   console.log(a)
// 2. String
   const name = "Jonh Doe"
   console.log(name);
// 3. Boolean
   const isStudent = true;
   console.log(isStudent);
// 4. Null
   let x = null;
   console.log(x);
// 5. Undefined
   let y = undefined;
   let W; 
   console.log(W, y);


// Non-Primitive Data Types
// 1. Object
   const person = {
    name: "John Doe",
    age: 20,
    isStudent: true,
    eat: function() {
        console.log("I am eating");
    }
   }
   console.log(person);

// 2. Array
   const fruits = ["apple", "banana", "cherry"];
   console.log(fruits);