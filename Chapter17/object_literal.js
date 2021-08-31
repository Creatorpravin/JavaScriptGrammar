let cat = {};
cat.name = "sam";
cat.hunger = 0;
cat.energy = 1;
cat.state = "idle";

//sleep to restore energy
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

cat.sleep();    //sam is sleeping.
cat.wakeup();   //sam woke up. 
cat.eat();      //sam is eating undefined units of food.
cat.wander();   //sam is wandering.