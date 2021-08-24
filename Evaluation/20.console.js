//console.log
let x = { property: 1, prop1: 2, method: function(){}};
console.log(x);              //{property: 1, prop1: 2, method: ƒ}
console.log("hello world");  //hello world
//printing object
let obj={};
console.log(obj);            //{}
console.log("object="+obj);  //object=[object Object]
console.log(`${obj}`);       //[object Object]

//console.dir
x = { property: 1, prop1: 2, method: function(){}};
console.dir(x);       
console.dir("hello"); //hello

//console.count
  console.count();       //default: 1
  console.count("a");    //a: 1
  console.count("b");    //b:1
  console.count("a");    //a:2
  console.count("a");    //a:3
  console.count();       //default:2
  console.count();       //default:3
  console.count();       //default:4
  console.count("b");    //b:2
  //console.countReset reset the count
  console.countReset();

//console.table
console.table(["Audi", "Volvo", "Ford"]);

//console.time/timeLog/timeEnd
console.time("a");
let arr=new Array(10000);
for(let i=0;i<arr.length;i++){
      arr[i]=new Object();
}
console.timeLog("a");
console.timeEnd("a");

//console.trace
function foo() {
    function bar() {
      console.trace();
    }
    bar();
}
foo();

//console.group()/groupEnd()
console.log("Hello world!");
console.group();
console.log("Hello again, this time inside a group!");
console.log("hello world");
console.groupEnd();
console.log("and we are back.");

//console.assert()
console.log("print even number");
const errorMsg = 'this is not even number';
for (let number = 2; number <= 5; number++) {
    console.log(number+' is even number ');
    console.assert(number % 2 === 0, {number,errorMsg});
}
