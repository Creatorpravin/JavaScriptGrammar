//generator function:
function* generator(){
    yield 1;
    yield 2;
    yield 3;
}
for(let value of generator())
   console.log(value);        //1 2 3