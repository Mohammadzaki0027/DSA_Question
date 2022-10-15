let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 3, 2, 1];
pop(arr1, arr2);

function pop(arr1, arr2) {
  let stk = [];
  let j = 0;
  let f = 0;
  let i = 0;

  while (stk[stk.length - 1] !== arr2[i] && j !== arr1.length) {
    console.log(arr2[i]);
    stk.push(arr1[j]);
    j++;

  }

  while (stk[stk.length - 1] !== arr2[f]) {
    stk.pop();
    f++;
  }

  console.log(stk);
}
