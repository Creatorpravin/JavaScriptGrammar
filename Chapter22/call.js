const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
}
const person1 = {
    firstName:"John",
    lastName: "Doe"
}
const person2 = {
    firstName:"Mary",
    lastName: "Doe"
}
let result = person.fullName.call(person1);
console.log(result);            //John Doe


//the call() Method with Arguments
const persons = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}
const persons1 = {
    firstName:"John",
    lastName: "Doe"
}
result = persons.fullName.call(persons1, "Oslo", "Norway");
console.log(result);     //John Doe,Oslo,Norway