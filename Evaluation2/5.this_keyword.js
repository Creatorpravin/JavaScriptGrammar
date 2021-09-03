"use strict";
var a = 10;
function z(){
    var a = 20;
    console.log(a);
    console.log(this.a);
}
z();
console.log(this);
"use strict";
//this inside object
var obj={
    id:10,
    name:"yuvaraj",
    f:function(){
        console.log(this.id);
    }
};
obj.f();