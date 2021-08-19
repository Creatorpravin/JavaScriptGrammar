//normal forEach method
let fruit=['pear','banana','orange','apple','pineapple'];
let print=function (item,index,object) {
    console.log(item);
}
fruit.forEach(print);

//function directly into forEach
fruit.forEach(function(item,index,object){
    console.log(item,index,object);
});

//arrow function directly into forEach 
fruit.forEach((item,index,object)=>{
    console.log(item,index,object);
});

//arrow function directly into forEach print item only
fruit.forEach(item=>console.log(item));