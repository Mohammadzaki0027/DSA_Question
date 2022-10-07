let str = ["a", "b", "c", "a", "e", "f", "a"];
output = "bcaef";
let ans = [];
function longestuniquestr(str, ans) {
  let n = str.length;
  let obj = {};
  let maxlength = 0;
  let start = 0;
  for (let i = 0; i < n; i++) {
    if (str[i] in obj) {
      start = Math.max(start, obj.get);
    }
  }
}

longestuniquestr(str, ans);
