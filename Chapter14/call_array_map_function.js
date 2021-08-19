function add(v){
    return v+1;
}
let array=[1,2,3,4,5];

var result=array.map(add);
console.log(result);        //[2, 3, 4, 5, 6]
console.log(array);         //[1, 2, 3, 4, 5] it is unchanged

