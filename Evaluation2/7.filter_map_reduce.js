"use strict";
let personsAge = [20,25,15,30,10];
let resultAge = personsAge.filter(age => age >= 18);
console.log(resultAge);

personsAge = [20,25,15,30,10];
resultAge = personsAge.map(age => age * 18);
console.log(resultAge);

personsAge = [20,25,15,30,10];
resultAge = personsAge.reduce((age,next) => age + next);
console.log(resultAge);