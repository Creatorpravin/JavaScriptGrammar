//object destructuring
({ x, y} = { x: 10, y: 20 });
console.log(x);            // 10
console.log(y);            // 20

//object destructuring with rest
({x, y, ...restof} = {x: 10, y: 20, m: 30, n: 40});
console.log(x);         // 10
console.log(y);         // 20
console.log(restof);    // {m: 30, n: 40}

//extract directly from object’s inner properties
let deep={
    basket:{
        fruit:{
            name:"orange",
            shape:"round",
            weight:0.2
        }
    }
};
let {name ,shape,weight}=deep.basket.fruit;
console.log(name);      //orange
console.log(shape);     //round
console.log(weight);    //0.2

//Merging objects with ...spread
let one={p:1,q:2,m:()=>{}};
let two={r:3,s:4,n:()=>{}};
let three={...one,...two}
console.log(three);

//...spread copies nested properties
let first={nest:{nest:{eggs:10}}};
let second={eggs:5};
let third={...first,...second};
console.log(third);
