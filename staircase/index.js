const n = 10;
const arr = [2, 3, -4, 6, -7, 8, -9, 10, 1];

function staircase(n) {
  const line = [];

  for (let i = 0; i < n; i++) {
    if (i === n - 1) {
      line.push("#");
    } else {
      line.push(" ");
    }
  }

  console.log(...line);
}

staircase(n);
