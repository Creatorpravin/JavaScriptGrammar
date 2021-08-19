//forEach
var month=["jun","feb","mar","apr"];
var allMonths="";
month.forEach(function1);
function function1(mon){
    allMonths += mon+" ";
}
console.log(allMonths);


//map
var number=[10,20,30,40,50];
var newArray=number.map(function2);
function function2(val){
    return val*10;
}
console.log(newArray);


