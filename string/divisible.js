let n = 12;
let count = 0;
let rem = n;
while (rem > 0) {
  let modvalue = rem % 10;
  rem = Math.floor(rem / 10);
  checkfunction(n, modvalue);
}
function checkfunction(n, modvalue) {
  if (n % modvalue === 0) {
    count++;
  }
}
console.log(count);
