"use strict";
function task(message) {
    console.log(message);
}
console.log('Start');

setTimeout(() => {
    task('Process');
}, 1000);

console.log('Done');