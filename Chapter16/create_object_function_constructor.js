function Season(name){
    this.name=name;
    this.getName=function(){
        return this.name;
    }
}
let winter=new Season("winter");
let spring=new Season("spring");
let summer=new Season("summer");
let autumn=new Season("Autumn");
console.log(winter);
console.log(spring);
console.log(summer);
console.log(autumn);