function Person() {
    this.name = 'Messi'
}

// adding property 
Person.prototype.name = 'Ronaldo';
Person.prototype.age = 30;

const person1 = new Person();

console.log(person1.name); //Messi
console.log(person1.age); //30