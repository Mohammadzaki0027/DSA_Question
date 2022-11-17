function nextgreater(N, arr) {
    let stk = [];
    let ans = [];
    // originaloutput=5 6 6 -1 4 5 5 -1 -1
    // input=   2 5 1 6 2 4 4 5 5
    //myoutput=5 6 6 -1 4 5 -1
//    input=  2 5 1 6 2 4 4 5 5
    for (let i = arr.length - 1; i >= 0; i--) {
      while (stk.length !== 0 && (stk[stk.length - 1] <= arr[i])) {
        stk.pop();
      }
      if (stk.length !== 0 && (stk[stk.length - 1] >= arr[i])) {
        ans.push(stk[stk.length - 1]);
      }
      if (stk.length === 0) {
        ans.push(-1);
      }
      stk.push(arr[i]);

    }
    console.log(ans.reverse());
  }
  
  function runProgram(input) {
    input = input.trim().split("\n");
    let tc = input[0];
    let line = 1;
    for (let i = 0; i < tc; i++) {
      let N = +input[line];
      line++;
      let arr = input[line].trim().split(" ").map(Number);
      line++;
      nextgreater(N, arr);
    }
  }
  
  if (process.env.USERNAME === "sw") {
    runProgram(`1
    9
    2 5 1 6 2 4 4 5 5`);
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
  