const prototype = {
    //cat sleep
    sleep(amount){
        this.state = "sleeping";
        console.log(`${this.name} is ${this.state}. `);
        this.energy += 1;
        this.hunger += 1;
    }
    
    //wake up
    wakeup(amount){
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
    
    //Wandering depletes energy,
    //if necessary, sleep for 5 hours to restore energy
    wander(amount) {
        this.state = "wandering";
        console.log(`${this.name} is ${this.state}.`);
        if(--this.energy < 1)
           this.sleep(5);
    }
}

function Cat( name, hunger, energy, state) {
    let cat = {};
    cat.name = name;
    cat.hunger = hunger;
    cat.energy = energy;
    cat.state = state;
    cat.sleep = prototype.sleep;
    cat.wakeup = prototype.wakeup;
    cat.eat = prototype.eat;
    cat.wander = prototype.wander;
  
    return cat;
}

let sam = Cat ("sam", 10, 5, "idle");
sam.sleep();                            //sam is sleeping.
sam.wakeup();                           //sam woke up. 
sam.eat(5);                             //sam is eating 5 units of food.
sam.wander();                           //sam is wandering.

let luna = Cat ("luna", 8, 3, "idle");
luna.sleep();                           //luna is sleeping.
luna.wakeup();                          //luna woke up. 
luna.wander();                          //luna is wandering.
luna.eat(5);                            //luna is eating 5 units of food.
