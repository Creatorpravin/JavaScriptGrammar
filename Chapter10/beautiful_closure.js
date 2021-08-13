let get=null;       //placeholder for global getter function
function closure(){
    this.inc=0;
    get=()=>this.inc;       //getter
    function increase(){this.inc++;}
    function decrease(){this.inc--;}
    function set(v){this.inc=v;}
    function reset(){this.inc=0;}
    function del(){
        delete this.inc;    //becomes undefined
        this.inc=null;      //additionally reset it to null
        console.log("this.inc deleted");
    }
    function readd(){
        //if null or undefined
        if(!this.inc)
           this.inc="re-added";
    }
    //return all methods at once
    return [increase,decrease,set,reset,del,readd];
}
let f=closure();
let inc=f[0];
let dec=f[1];
let set=f[2];
let res=f[3];
let del=f[4];
let add=f[5];

inc();          //1
inc();          //2
dec();          //1
get();          //1
set(7);         //7
get();          //7
res(0);         //0
get();          //0
// delete property
del(0);         //null
get();          //null
//read property inc
add();          
get();          //"readd"
res();          //0
inc();          //1
get();          //1
