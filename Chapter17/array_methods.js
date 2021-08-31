var x=[1,2,3,4,5];
//print the array
console.log(x);

//filter method
var result=x.filter(even);
display(result);

//reduce method
result=x.reduce((acc,val)=>acc+=val);
display(result);

//map method
result=x.map(square);
display(result);

//even function
function even(value){
    if(value%2==0)
       return value; 
}

//square function
function square(value){
    return value*value; 
}

//display the result
function display(r){
    console.log(result);
}
