const whites = [
  ["N", "B", 2],
  ["Q", "B", 1],
];

const blacks = [["Q", "A", 4]];

const moves = 1;

const cols = ["A", "B", "C", "D"];

const wnPosition = whites.find((item) => item.includes("N"));
wnPosition[1] = cols.indexOf(wnPosition[1]);

function getNAttacks(c, r) {
  const attacks = [
    [c - 2, r + 1],
    [c - 2, r - 1],
    [c - 1, r + 2],
    [c - 1, r - 2],
    [c + 1, r + 2],
    [c + 1, r - 2],
    [c + 2, r + 1],
    [c + 2, r - 1],
  ];

  const possibles = attacks.filter((att) => att[0] >= 0 && att[1] >= 1);

  return possibles;
}

const wnAttacks = getNAttacks(wnPosition[1], wnPosition[2]);

console.log(wnAttacks);
