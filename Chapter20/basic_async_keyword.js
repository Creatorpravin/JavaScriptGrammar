//simple example for async
async function a() { return 1; }
a().then(console.log);              //1

async function b() { return "first"; }
async function c() { return Promise.resolve("second"); }
b().then(console.log);              //first
c().then(console.log);              //second

