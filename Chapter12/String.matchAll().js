let string="hello";
let matches=string.match("l");
console.log(matches[0]);      //l

//Regular Expression 
let string="hello";
let matches=string.match(/l/);
console.log(matches[0]);      //l

//Adding /g to the mix
let string="hello";
let ret=string.match(/l/g);   
console.log(ret);     //["l", "l"]

//Regular Expression Capture Groups
const string ='black*raven lime*parrot while*seagull';
const regex=/(?<color>.*?)\*(?<bird>[a-z0-9]+)/g;
while(match=regex.exec(string))
{
    let value=match[0];
    let index=match.index;
    let input=match.input;
    console.log(`${value} at ${index} with '${input}'`);
    console.log(match.groups.color);
    console.log(match.groups.bird);
}

//Capture Groups example with .matchAll()
const string ='black*raven lime*parrot while*seagull';
const regex=/(?<color>.*?)\*(?<bird>[a-z0-9]+)/g;
for(const match of string.matchAll(regex))
{
    let value=match[0];
    let index=match.index;
    let input=match.input;
    console.log(`${value} at ${index} with '${input}'`);
    console.log(match.groups.color);
    console.log(match.groups.bird);
}
