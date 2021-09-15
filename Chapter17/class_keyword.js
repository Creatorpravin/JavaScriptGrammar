class Cat{
constructor(name, hunger, energy, state){
    this.name = name;
    this.hunger = hunger;
    this.energy = energy;
    this.state = state;
}
}
Cat.prototype.sleep = function (){
    this.state = "sleeping";
    console.log(`${this.name} is ${this.state}. `);
    this.energy += 1;
    this.hunger += 1;
}
Cat.prototype.wakeup = function (){
this.state = "idle";
console.log(`${this.name} woke up. `);
}
Cat.prototype.eat = function (){}
Cat.prototype.wander = function (){}
let luna =new Cat("Luna",5, 1, "sleeping");
luna.sleep();
let felix =new Cat("Fleix",5, 1, "sleeping");
felix.wakeup();