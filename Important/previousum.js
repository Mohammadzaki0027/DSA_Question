function sumarray(N, arr) {
    let sum=0
    let ans=[]
for(let i=0;i<arr.length;i++)
{
sum+=arr[i]
ans.push(sum)
}
console.log(ans.join(" "))
}

function runProgram(input) {
  input = input.trim().split("\n");
  let line = 1;
  let t = +input[0];
  for (let i = 0; i < t; i++) {
    let N = +input[line];
    line++;
    let arr = input[line].trim().split(" ").map(Number);
    line++;

    let y = sumarray(N, arr);
    //console.log(y);
  }
}

if (process.env.USERNAME === "sw") {
  runProgram(`1
    5
    1 2 3 4 5`);
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
