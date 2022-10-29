let arr = [1 ,2 ,3 ,4 ,5 ,4, 3, 2, 1, 3, 4];
let type = [1, 2, 3, 4, 5];
let stk = [];
for (let i = 0; i < type.length; i++) {
  let count = 0;
  for (let j = 0; j < arr.length; j++) {
    if (type[i] === arr[j]) {
      count++;
    }
  }
  stk.push(count);
}
// console.log(stk,"stk count");

let max = 0;
index=0
for (let i = 0; i < stk.length; i++) {
  if (max < stk[i]) {
    max =stk[i]
    index=i
    // console.log(i,"i");
  }
}
 console.log(index + 1);
