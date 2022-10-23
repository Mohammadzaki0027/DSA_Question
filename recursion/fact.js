function fact(N, i) {
  if (i > N) return 1;
  return i * fact(N, i + 1);
}
console.log(fact(5, 1));


