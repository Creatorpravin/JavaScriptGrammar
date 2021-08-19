function fun(func){
    //call function by its parameter name
    if(typeof func =="function")
        console.log(func());   
}
var array=[];
var f=function(){}
fun(array);     //pass array instead of function
