var plus=(function(){
    var count=0;  //defined only once
    return function(){
        count=count+1;
        return count;
    }
})();
    console.log(plus());     //1
    console.log(plus());     //2
    