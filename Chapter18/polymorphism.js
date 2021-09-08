class FirstClass{
    constructor(id, name){
        this.id = id; 
        this.name = name;
    }
    display1() {  
       console.log("First Class is invoked");  
    }   
} 
class SecondClass extends firstClass { 
    display2(){
        console.log(this.id+" and "+this.name);  
    } 
}  
var result=new secondClass(100,"yuvaraj");  
result.display1();  

