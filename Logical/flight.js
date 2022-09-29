function fu(arr, N) {
  let qu=[]
for(let i=0;i<arr.length;i++)
{
  if(arr[i][1]==="old")
  {
qu.push(arr[i][0])
  }
}
for(let i=0;i<arr.length;i++)
{
  if(arr[i][1]==="woman")
  {
qu.push(arr[i][0])
  }else if(arr[i][1]==="child")
  {
qu.push(arr[i][0])
  }
}

for(let i=0;i<arr.length;i++)
{
  if(arr[i][1]==="man")
  {
qu.push(arr[i][0])
  }
}
for(let i=0;i<arr.length;i++)
{
  if(arr[i][1]==="crew")
  {
qu.push(arr[i][0])
  }
}
console.log(qu);
}

function runProgram(input) {
  input = input.split("\n");
  let N = +input[0];
  let line = 1;
let arr=[]
  for (let i = 0; i < N; i++) {
   arr.push(input[line].trim().split(" "))
    line++;
 
  }
  fu(arr, N);
}

if (process.env.USERNAME === "sw") {
  runProgram(`7
  Ankush crew
  Sachin man
  Aditi woman
  Pankaj old
  Preeti old
  Ansh child
  Aarya woman`);
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
