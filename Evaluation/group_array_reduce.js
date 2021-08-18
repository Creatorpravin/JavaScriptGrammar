var users=[
    {id: 1, name: 'edison' }, 
    {id: 2, name: 'Annand' }, 
    {id: 3, name: 'Vasnath'}
];
var groupByid = users.reduce((acc, intex) => {
    acc[intex.id] = acc[intex.id] + 1 || 1;
    return acc;
  }, {});
console.log(groupByid);    //{1: 1, 2: 1, 3: 1}
