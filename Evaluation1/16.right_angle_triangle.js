"use strict";
function* generator() {
    yield ('*');
    yield ('**');
    yield ('***');
    yield ('****');
    yield ('*****');
}
for(let value of generator())
   console.log(value); 
