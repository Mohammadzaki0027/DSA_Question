function Door(str) {

  let stk = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "s" || str[i] === "b" || str[i] === "g") {
      stk.push(str[i]);
    } else {

      let j = 0;
      let flag = true;
      while (j !==stk.length) {

        if (str[i] === stk[j].toUpperCase()) {
  
          stk.splice(j, 1);

          flag = true;
          break;
        } else {
          j++;
          flag = false;
        }
      }
      if (flag === false) return false;
    }
  }
  return true;
}

function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let str1 = input[line].trim().split("");
    line++;
    let y = Door(str1);
   // console.log(y);
  }
}

if (process.env.USERNAME === "sw") {
  runProgram(`2
  bBsGSg
  sbgBGS
  `);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
