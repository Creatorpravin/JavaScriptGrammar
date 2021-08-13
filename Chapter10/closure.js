//example1
function mail(from,sub,msg){
    let message=sub+" : "+msg+" by "+from;
    let send=function(){ console.log(message); }
    send();
}
mail("worker","report","work completed",);     //report : work completed by worker

//example2
function mail(from,sub,msg){
    let message=sub+" : "+msg+" by "+from;
    let send=function(){ console.log(message); }
    return send;
}
//create reference to send mail
let ref=mail("worker","report","work completed",); 
//call by reference name
ref();

//example3
let print ,set, increase, decrease;
function manager(){
    console.log("manager();");
    let number=10;
    print=function(){console.log(number);}
    set =function(value){number=value}
    increase=function(){number++}
    decrease=function(){number--}
}
manager();                              //manager();
print();                                //10
for(let i=0;i<200;i++) increase();      
print();                                //210 
decrease();
print();                                //209
set(1000);                      
print();                                //1000
let old_print=print;
manager();                              //manager();
print();                                //10
old_print();                            //1000

