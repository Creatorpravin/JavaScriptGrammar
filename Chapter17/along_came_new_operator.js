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
function Cat(name, hunger, energy, state){
    let cat = Object.create(Cat.prototype);
    cat.name = name;
    cat.hunger = hunger;
    cat.energy = energy;
    cat.state = state;
    return cat;
}
let luna =new Cat("Luna",5, 1, "sleeping");
luna.sleep();
let felix =new Cat("Fleix",5, 1, "sleeping");
felix.wakeup();