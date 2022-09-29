function remove(N, str) {
  for (let j = 0; j < str.length; j++) {
    if (str[j] !== str[j + 1]) {
      for (let i = 0; i < str.length - 1; i++) {
        if (str[i] == str[i + 1]) {
          str.splice(i, 2);
        }
      }
    } else {
      str.splice(i, 2);
    }
  }

  console.log(str.join(""));
}
function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let N = +input[line];
    line++;
    let str1 = input[line].trim().split("");
    line++;
    let y = remove(N, str1);
    // console.log(y);
  }
}

if (process.env.USERNAME === "sw") {
  runProgram(`1
    6
    abbaca
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
