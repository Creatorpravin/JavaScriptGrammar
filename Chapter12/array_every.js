const ages = [32, 33, 16, 40];
var ans=ages.every(checkAge)    // Returns false
function checkAge(age) {
  return age > 18;
}
console.log(ans);