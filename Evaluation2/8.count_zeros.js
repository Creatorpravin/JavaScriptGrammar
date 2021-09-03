"use strict";
var start = 1;
var end = 50;
var start_type = typeof start;
var end_type = typeof end;
var startConvertToString = start + "" ;
var endConvertToString = end + "" ;
if(start_type === "number" && end_type === "number" && startConvertToString.indexOf(".") === -1 && endConvertToString.indexOf(".") === -1){
    var count = 0;
    for(let i = start ; i <= end ; i++ ){
        let numberToString = i + "" ;
        count += numberToString.split("0").length - 1;
    }
    console.log(count);
}
else{
    console.log("This value not accepted");
}

