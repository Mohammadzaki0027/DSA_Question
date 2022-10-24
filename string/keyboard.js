let b = 10;
let nofdrives = 3;
let noofkey = 2;
let drives = [3, 1];
let keyboards = [5, 2, 8];
// [1,3][2,5,8]

// 5 1 1
// 4
// 5
keyboards.sort((a, b) => {
  return a - b;
});
drives.sort((a, b) => {
  return a - b;
});
let pro = 0;
let max = 0;
for (let i = 0; i < drives.length; i++) {
  for (let j = 0; j < keyboards.length; j++) {
    pro = keyboards[j] + drives[i];
    if (pro <= b) {
      if (pro > max) {
        max = pro;
      }
    }
    pro=0
  }


}
return(max);