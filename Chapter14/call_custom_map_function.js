function add(v){
    return v+1;
}
function map(array,f){
    let copy=[];
    for(let index=0;index<array.length;index++){
        let original=array[index];
        let modified=f(original);
        copy[index]=modified;
    }
    return copy;
}
let array=[0,1,2];
array= map(array,add);  
console.log(array);    //[1,2,3]