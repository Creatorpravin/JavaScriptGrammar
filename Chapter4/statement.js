let x=10,y,z;
x;   //10
y;   //undefined
y=20;
y;   //10
z=x+y;
console.log(z);  //30

if(y>=0){
    x=y;
}else{
    x=-y;
}