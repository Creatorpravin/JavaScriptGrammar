//break the for loop without condition
for(let i=0;;i++){
    console.log("loop");       //loop
    break;             // for loop break here
};

//custom breaking condition
for(let i=0;;i++){
    console.log("loop , i="+i);       
    if(i>1)
     break;             // for loop break here
};

//Breaking To Label
//mark breaking
let c=0;
mark: for(let i=0;i<5;i++)
    inner:for(let j=0;j<5;j++){
        c++;
        if(i==2)
          break mark;
    }
console.log(c);       //11 
//inner breaking
let d=0;
mark: for(let i=0;i<5;i++)
    inner:for(let j=0;j<5;j++){
        d++;
        if(i==2)
          break inner;
    }
console.log(d);       //21    

//Breaking from a labeled block scope:
block:{
    console.log("before");     //console print "before"
    break block;               //break the block
    console.log("after");      //Execution flow never reaches ”after”
}