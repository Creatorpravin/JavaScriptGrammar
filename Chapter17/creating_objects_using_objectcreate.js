const cat = {
    name: "Felix",
    state: "idle",
    hunger: 1,
}
const kitten = Object.create(cat);
kitten.name = "Luna";
kitten.state = "sleeping";
console.log(kitten);
console.log(kitten.name);
console.log(kitten.state);
console.log(kitten.hunger);