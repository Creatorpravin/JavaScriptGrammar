const prototype = {
    //cat sleep
    sleep(amount){
        this.state = "sleeping";
        console.log(`${this.name} is ${this.state}. `);
        this.energy += 1;
        this.hunger += 1;
    }
    
    //wake up
    wakeup(){
        this.state = "idle";
        console.log(`${this.name} woke up. `);
    }
    
    //Eat until hunger is quenched
    eat(amount){
        this.state = "eating";
        console.log(`${this.name} is ${this.state} ${amount} units of food.`);
        if(this.hunger -= amount <= 0)
            this.energy += amount;
        else
            this.wakeup();    
    }
    wander() {
        this.state = "wandering";
        console.log(`${this.name} is ${this.state}.`);
        if(--this.energy < 1)
           this.sleep(5);
    }
}

function Cat(name, hunger, energy, state){
    let cat = Object.create(prototype);
    cat.name = name;
    cat.hunger = hunger;
    cat.energy = energy;
    cat.state = state;
    //we no longer need them here
    //cat.sleep = prototype.sleep;
    //cat.wakeup = prototype.wakeup;
    //cat.eat = prototype.eat;
    //cat.wander = prototype.wander;
    return cat;
}
let felix = Cat("Felix", 10, 5, "idle");
felix.sleep();  //felix is sleeping.
/*felix.wakeup(); //felix is wakeup.
felix.eat();    //felix is eat.
felix.wander(); //felix is wander.*/
let luna = Cat("luna", 8, 3, "idle");
luna.sleep();   //luna is sleeping.   
/*luna.wakeup();  //luna is wakeup.
luna.eat();     //luna is eat.
luna.wander();  //luna is wander.*/
