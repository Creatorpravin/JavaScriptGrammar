let planets=function(a){
    return function(b){
        return "Favorite planets are "+a+" and "+b;
    };
};
let favoritePlanets = planets("Jupiter");
//Call the curried fnction with different arguments
console.log(favoritePlanets("Earth"));    //Favorite planets are Jupiter and Earth
console.log(favoritePlanets("Mars"));     //Favorite planets are Jupiter and Mars
console.log(favoritePlanets("Saturn"));   //Favorite planets are Jupiter and Saturn

//
let planet=function(x){
    return function(y){ 
    return "Favorite planets are "+x+" and "+y;
    }
}
console.log(planet("earth")("Mars"));