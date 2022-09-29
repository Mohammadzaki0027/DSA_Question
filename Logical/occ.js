function equ(N, str1, str2) {
    let obj1={}
    let obj2={}
  for (let i = 0; i < str1.length; i++) {

if(obj1[str1[i]]===undefined)
{
    obj1[str1[i]]=1
}else{
    obj1[str1[i]]+=1
}
if(obj2[str2[i]]===undefined)
{
    obj2[str2[i]]=1
}else{
    obj2[str2[i]]+=1
}
}

}

function runProgram(input) {
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let N = +input[line];
    line++;
    let str1 = input[line].trim();
    line++;

    let str2 = input[line].trim();
    line++;

    equ(N, str1, str2);
  }
}

if (process.env.USERNAME === "sw") {
  runProgram(`2
    3
    eff
    arr
    3
    foo
    bar`);
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
