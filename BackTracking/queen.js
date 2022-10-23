function checkSafe(board, row, col) {
  for (let i = row - 1; i >= 0; i--) {
    console.log("first loop",row, col);
    if (board[i][col] == 1) {
      return false;
    }
  }
  for (let i = row - 1, j = col + 1; i >= 0 && j < board.length; i--, j++) {
    console.log("second loop",row, col);
    if (board[i][j] == 1) {

      return false;
    }
  }
  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    console.log("third loop",row, col);
    if (board[i][j] == 1) {
      return false;
    }
  }
  return true;
}

var board = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];
var count = 0;
nQueens(board, 4, 0);
// function printBoard(board){
//     for (let i = 0;i<board.length;i++){
//         console.log(board[i].join(" "));
//     }
//     console.log("----------");
// }
function nQueens(board, N, row) {
  if (row == N) {
    // printBoard(board);
    count++;
    return;
  }
  for (let i = 0; i < N; i++) {
    if (checkSafe(board, row, i) == true) {
      board[row][i] = 1;
      nQueens(board, N, row + 1);
      board[row][i] = 0;
    }
  }
}
