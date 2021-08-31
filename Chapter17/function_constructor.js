function Cat( name, hunger, energy, state) {
    let cat = {};
    cat.name = name;
    cat.hunger = hunger;
    cat.energy = energy;
    cat.state = state;

    //cat sleep
    cat.sleep = function(amount){
        this.state = "sleeping";
        console.log(`${this.name} is ${this.state}. `);
        this.energy += 1;
        this.hunger += 1;
    }
    
    //wake up
    cat.wakeup = function(){
        this.state = "idle";
        console.log(`${this.name} woke up. `);
    }
    
    //Eat until hunger is quenched
    cat.eat = function(amount){
        this.state = "eating";
        console.log(`${this.name} is ${this.state} ${amount} units of food.`);
        if(this.hunger -= amount <= 0)
            this.energy += amount;
        else
            this.wakeup();    
    }
    
    //Wandering depletes energy,
    //if necessary, sleep for 5 hours to restore energy
    cat.wander = function() {
        this.state = "wandering";
        console.log(`${this.name} is ${this.state}.`);
        if(--this.energy < 1)
           this.sleep(5);
    }
    return cat;
}

let sam = Cat ("sam", 10, 5, "idle");
sam.sleep();                            //sam is sleeping.
sam.eat(5);                             //sam is eating 5 units of food.
sam.wander();                           //sam is wandering.
sam.wakeup();                           //sam woke up. 

let luna = Cat ("luna", 8, 3, "idle");
luna.sleep();                           //luna is sleeping.
luna.wander();                          //luna is wandering.
luna.eat(5);                            //luna is eating 5 units of food.
luna.wakeup();                          //luna woke up. 