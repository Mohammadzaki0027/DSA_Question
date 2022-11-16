function middel(N, arr) {
  let first = 0;
  let second = 0;
  let third = 0;
  let fourth = 0;
  let size = N / 4;
  //   2*c1 + c2 + 2*c3 + c4
  for (let i = 0; i < arr.length; i++) {
    if (i < size) {
      first += arr[i];
      console.log(first, "first");
    }
    if (i < size + size) {
      second += arr[i];

      //   console.log(second,"second");
    }
    if (i < size + size + size) {
      third += arr[i];
      console.log(third, "third");
    }
    if (i < size + size + size + size) {
      fourth += arr[i];
    //   console.log(fourth, "fourth");
    }
  }
second=second-first
third=third-second-first
fourth=fourth-third-second-first
console.log(2*first+second+2*third+fourth);


}

function runProgram(input) {
  input = input.trim().split("\n");
  let line = 0;

  let N = +input[line];
  line++;
  let arr = input[line].trim().split(" ").map(Number);
  line++;

  let y = middel(N, arr);
  // console.log(y);
}

if (process.env.USERNAME === "sw") {
  runProgram(`8
    1 2 3 4 5 6 7 8`);
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
