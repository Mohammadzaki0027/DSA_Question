function packer(k, n, arr, moves) {
  let arr1 = [];

  check(k, n, arr, moves);
  function check(k, n, arr, moves) {
    if (k === 0) {
      arr1.push(moves);

      return;
    }
    if (k < 0) {
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      check(k - arr[i], n, arr, moves + 1);
    }
  }

  return arr1
}

function runProgram(input) {
  input = input.trim().split("\n");
  var [k, n] = input[0].trim().split(" ").map(Number);
  var arr = input[1].trim().split(" ").map(Number);

  let y = packer(k, n, arr, 0);


  if (y.length > 0) {
    // console.log(arr1);
    let max = -Infinity;
    let min = Infinity;

    for (let i = 0; i < y.length; i++) {
      if (y[i] > max) {
        max = y[i];
      }
    }
    for (let i = 0; i < y.length; i++) {
      if (y[i] < min) {
        min = y[i];
      }
    }
    console.log(max,min);
  } else {
    console.log(-1);
  }










}

if (process.env.USERNAME === "sw") {
  runProgram(`36 2
  1 10
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
