function validator(N, arr1, arr2) {

    let stk=[]
    let j=0
    for (let i = 0; i < arr1.length; i++) {
        stk.push(arr1[i]);
        if (stk[stk.length - 1] === arr2[j]) {
          while (stk[stk.length - 1] === arr2[j]&&j<arr2.length) {
            stk.pop();
          j++;
        }
        }
      }
    
     if(stk.length>0)
     {
        return 0
     }else{
        return 1
     }
}

function runProgram(input) {
  input = input.trim().split("\n");
  let line = 1;
  let t = +input[0];
  for (let i = 0; i < t; i++) {
    let N = +input[line];
    line++;
    let arr1 = input[line].trim().split(" ").map(Number);
    line++;

    let arr2 = input[line].trim().split(" ").map(Number);
    line++;
    let y = validator(N, arr1, arr2);
    console.log(y);
  }
}

if (process.env.USERNAME === "sw") {
  runProgram(`2
    5
    1 2 3 4 5
    4 5 3 2 1
    5
    1 2 3 4 5
    4 3 5 1 2`);
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
