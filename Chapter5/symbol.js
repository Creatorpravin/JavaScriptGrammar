// creating symbol
const x = Symbol()
typeof x; // symbol

const x = Symbol('hey');
console.log(x); // Symbol(hey)

const x = Symbol('hey');
console.log(x.description); // hey

// two symbols with the same description
const value1 = Symbol('hello');
const value2 = Symbol('hello');
console.log(value1 === value2); // false
