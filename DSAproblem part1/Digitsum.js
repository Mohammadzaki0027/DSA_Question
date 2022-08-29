function Digitsum(N, arr)
{
    let ans=[]
    for(let i=0;i<arr.length;i++)
    {
let z=sum(arr[i])
ans.push(z)
    }
    console.log(ans.join(" "));
}
function sum(a)
{
    let sum=0
    let s=a.toString()
for(let i=0;i<s.length;i++)
{
sum+=Number(s[i])
}
return(sum)
}

function runProgram(input) {
    input = input.trim().split("\n");
    let line = 1;
    let t = +input[0];
    for (let i = 0; i < t; i++) {
      let N= +input[line]
      line++;
      let arr = input[line].trim().split(" ").map(Number);
      line++;
  
    
      let y = Digitsum(N, arr);
      //console.log(y);
    }
  }
  
  if (process.env.USERNAME === "sw") {
    runProgram(`2
    5
    12 14 16 17 29
    6
    1 2 3 4 5 51`);
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