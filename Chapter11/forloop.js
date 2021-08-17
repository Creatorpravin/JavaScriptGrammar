//for-loop with an empty body
for(let i=0;i<1;i++);         
//iterate over a single statement
for(let i=0;i<2;i++) console.log("hi");    //hi
//iterate over a multiple statement
for(let i=0;i<2;i++) {
    console.log("hello");
    console.log("world");            
}
//output
//hello
//world
//hello
//world

//if use more than one statement in same line 
for(let i=0;i<2;i++) console.log("hello"); console.log("world");
//output
//hello
//hello
//world
for(;;)
  console.log("1");