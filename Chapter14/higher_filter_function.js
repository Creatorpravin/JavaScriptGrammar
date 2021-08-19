//With Higher-order function filter
const persons = [
    { name: 'Peter', age: 16 },
    { name: 'Mark', age: 18 },
    { name: 'John', age: 27 },
    { name: 'Jane', age: 14 },
    { name: 'Tony', age: 24},
  ];
  const fullAge = persons.filter(person => person.age >= 18);
  console.log(fullAge);

  //Without Higher-order function
  const persons1 = [
    { name: 'Peter', age: 16 },
    { name: 'Mark', age: 18 },
    { name: 'John', age: 27 },
    { name: 'Jane', age: 14 },
    { name: 'Tony', age: 24},
  ];
  const fullAge1 = [];
  for(let i = 0; i < persons1.length; i++) {
    if(persons1[i].age >= 18) {
      fullAge1.push(persons1[i]);
    }
  }
  console.log(fullAge1);