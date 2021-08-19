var fruit=[
    {name:"apple", count:13,},
    {name:"pear", count:12,},
    {name:"banana", count:12,},
    {name:"strawberry", count:11,},
    {name:"cherry", count:11,},
    {name:"blakberry", count:10,},
    {name:"pineaplle", count:10,},
];
let my_sort=(a,b)=>a.count-b.count;
let sorted=fruit.sort(my_sort);
console.log(sorted);