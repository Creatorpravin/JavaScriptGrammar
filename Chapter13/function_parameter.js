function  fun(text,number,array,object,func,misc){
    console.log(text);
    console.log(number);
    console.log(array);
    console.log(object);
    console.log(func);
    console.log(misc);
    //call the function by its parameter name
    func();
}

function volleyball(){
    return "volleyball";
}

fun("text",10,[1,2,3],{count:1},volleyball,volleyball());