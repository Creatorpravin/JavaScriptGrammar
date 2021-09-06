"use strict";
var persons = [20,25,15,30,10];
var fullAge = persons.filter(person => person >= 18);
console.log(fullAge);

persons = [20,25,15,30,10];
fullAge = persons.map(person => person * 18);
console.log(fullAge);

persons = [20,25,15,30,10];
fullAge = persons.reduce((person,next) => person + next);
console.log(fullAge);