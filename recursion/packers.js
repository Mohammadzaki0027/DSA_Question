// (1,1,1) -> The first truck is sent thrice,
//  to transport 3 units of weight.
// (2,1) -> First, the truck with capacity 2
// is sent followed by the truck with capacity 1.
// (1,2) ->First, the truck with capacity 1 is
// sent followed by the truck with capacity 2.
// (3) -> The truck with capacity 3 is sent alone.

// 3 3
// 1 2 3

let count = 0;
function packer(k, n, arr) {
  if (k === 0) {
    count++;
    return;
  }
  if (k < 0) {
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    packer(k - arr[i], n, arr);
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  var [k, n] = input[0].trim().split(" ").map(Number);
  var arr = input[1].trim().split(" ").map(Number);

  let y = packer(k, n, arr);
  console.log(count);
}

if (process.env.USERNAME === "sw") {
  runProgram(`3 3
  1 2 3
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
