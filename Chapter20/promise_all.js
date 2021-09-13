var promise = "promise";
var thread = "thread";
var wish = Promise.resolve("I wish.");
//data set
var array = [promise, thread, wish];
Promise.all(array).then(function(values){
    console.log(values);                   //['promise', 'thread', 'I wish.']
});
