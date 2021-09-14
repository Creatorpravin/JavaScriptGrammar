let generator = function*() {
    yield 1;
    yield 2;
    yield 3;
    yield "hello";
    return "Done";
}
let gen = generator();
console.log(gen.next());    //{value: 1, done: false}
console.log(gen.next());    //{value: 2, done: false}
console.log(gen.next());    //{value: 3, done: false}
console.log(gen.next());    //{value: 'hello', done: false}
console.log(gen.next());    //{value: 'Done', done: true}
