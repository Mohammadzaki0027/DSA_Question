function runProgram(input) {
  input = input.trim().split("\n");
  let [N, K] = input[0].trim().split(" ").map(Number);
  let line = 1;
  let arr = input[line].trim().split(" ").map(Number);
  line++;
  let sum = [...arr];

  for (let i = 0; i < K; i++) {
    let quer = input[line].trim().split(" ").map(Number);
    line++;

    if (quer.length > 2) {
      let [a, b, c] = [...quer];

      const index = arr.indexOf(b);
    
     sum[index] = c;
     let r=sum.reduce((e,a)=>e+=a)
     console.log(r);
    } else {
      let [x, y] = [...quer];
    
 for(let i=0;i<arr.length;i++)
 {
  sum[i]=y
 }
 let r=sum.reduce((e,a)=>e+=a)
      console.log(r);
    }
  }
}

if (process.env.USERNAME === "sw") {
  runProgram(`5 5
      1 2 3 4 5
      1 1 5
      2 10
      1 5 11
      1 4 1
      2 1`);
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
