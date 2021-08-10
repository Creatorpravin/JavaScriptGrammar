// define a variable ,without assigning a value
let bike;
console.log(bike);   //undefined

//Explicity assign undefined as default variable name
bike=undefined;
console.log(bike);   //undefined

//Explicity assign null as default variable name
bike=null;
//class Definition
class Motorcycle{
    constructor(make, model, year){
        this.make=make;
        this.model=model;
        this.year=year;
        this.features=null;
    }
    getFeatures(){
        //Download features from database for the first time
        if(this.features==null){
            this.features={/*get features from database*/}
        }else{
            this.features={/*get features from database*/}
        }

    }
    //instantiate new bike class
    bike=new Motorcycle("hero","XPulse200","2020");
    //get features from database
    bike.getFeatures();
} 
