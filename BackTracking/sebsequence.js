let str = "abcd";
let index = 0;
let newstr = [];
function sebstr(str, newstr, index) {
  if (newstr.length !== 0) {
    console.log(newstr.join(""));
  }
  if (index === str.length) return;

  for (let i = index; i < str.length; i++) {
    newstr.push(str[i]);
    sebstr(str, newstr, i + 1);
    newstr.pop();
  }
}

sebstr(str, newstr, index);
