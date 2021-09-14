function* generator() {
   try{
    yield 1;
    yield 2;
    yield 3;
   }catch(error){
       console.log("Error caught!", error);
   }
}
let gen = generator();
console.log(gen.next());    //{value: 1, done: false}
console.log(gen.next());    //{value: 2, done: false}
console.log(gen.next());    //{value: 3, done: false}
gen.throw(new Error('Something went wrong'));
