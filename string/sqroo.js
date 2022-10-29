let a = 17;
let b = 24;
let count = 0;
for (let i = a; i <= b; i++) {
  if (i > 0) {
    if (Math.ceil(Math.sqrt(i)) === Math.floor(Math.sqrt(i))) {
        console.log(i);
      count++;
    }
  }
}

console.log(count);
