class Cat1{
    let property=1;     //Unexpected identifier
    this.property=2;
}

class Cat2{
    constructor(){
        let proper=1;
        this.something=2;
    }
    method(){
        console.log(this.proper);     //undefined
        console.log(this.something);    //undefined
    }
}