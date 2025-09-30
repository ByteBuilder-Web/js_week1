// Week 1 Exercises - Implement the functions to make tests pass

// 1) Arithmetic Operator
function addNumbers(a, b) {
  // TODO: return the sum of a and b using +
}

// 2) Assignment Operator
function assignValue(c, d) {
  // TODO: assign d to c using = and return the resulting value
}

// 3) Comparison Operators
function isEqualValue(left, right) {
  // TODO: compare values using ==
}

function isStrictEqual(left, right) {
  // TODO: compare values and types using ===
}

// 4) String Template
function makeStringTemplate(name, age, isStudent) {
  // TODO: return `Name: ${name}, Age: ${age}, Is Student: ${isStudent}`
}

// 5) Primitive Data Types
function primitiveValues() {
  // TODO: return an object with keys:
  // number: a number (e.g., 12)
  // string: a string (e.g., "John Doe")
  // boolean: a boolean (e.g., true)
  // nullVal: null
  // undefinedVal: undefined
}

// 6) Non-Primitive: Object
function createPerson(name, age, isStudent) {
  // TODO: return an object with keys name, age, isStudent and method eat() that logs "I am eating"
}

// 7) Non-Primitive: Array
function createFruits() {
  // TODO: return an array containing "apple", "banana", "cherry"
}

// 8) Undefined example
function demonstrateUndefined() {
  // TODO: declare a variable W without assigning and a variable y with value undefined; return { W, y }
}

module.exports = {
  addNumbers,
  assignValue,
  isEqualValue,
  isStrictEqual,
  makeStringTemplate,
  primitiveValues,
  createPerson,
  createFruits,
  demonstrateUndefined,
};
