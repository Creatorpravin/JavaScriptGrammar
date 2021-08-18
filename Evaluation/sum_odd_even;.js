var odd=0,even=0;
for(let i=0;i<=100;i++){
    if(i%2==0)
        even +=i;
    else
        odd +=i;
}
console.log("sum of even:",even);  //sum of even: 2550
console.log("sum of odd:",odd);    //sum of odd: 2500
