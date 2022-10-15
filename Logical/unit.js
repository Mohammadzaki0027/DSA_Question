function consumed(N) {
  let value = N - 80;
  let unit = 0;
  if (value > 150) {
    unit += 50;
    value = value - 150;
  } else {
    unit = Math.floor(value / 3);
    value = 0;
  }

  if (value >= 500) {
    unit += 100;
    value -= 500;
  } else {
    unit += Math.floor(value / 5);
    value = 0;
  }

  if (value > 0) {
    unit += Math.floor(value / 10);
  }

  console.log(unit);
}

consumed(680);
