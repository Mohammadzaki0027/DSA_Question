let str = "aabcd";
let obj = {};
for (let i = 0; i < str.length; i++) {
  obj[str[i]] === undefined ? (obj[str[i]] = 1) : (obj[str[i]] += 1);
}
let count = 0;
for (let e in obj) {
  if (obj[e] % 2 !== 0) {
    count++;
  }
}

count > 1 ? console.log("Not Palindrome") : console.log("Palindrome");

// end of palindrome problem
