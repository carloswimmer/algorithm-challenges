const whites = [
  ['N', 'B', 2],
  ['Q', 'B', 1],
];

const blacks = [['Q', 'A', 4]];

const moves = 1;

const cols = ['A', 'B', 'C', 'D'];

function getWhitePosition(t) {
  const position = whites.find((item) => item.includes(t));
  position[1] = cols.indexOf(position[1]);
  const coordinates = {
    c: position[1],
    r: position[2],
  };

  return coordinates;
}

function getBlackQueenPosition() {
  const position = blacks.find((item) => item.includes('Q'));
  position[1] = cols.indexOf(position[1]);
  position.shift();
  const stringfied = position.join('');

  return stringfied;
}

function getNAttacks({ c, r }) {
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
  const stringfied = possibles.map((item) => item.join(''));

  return stringfied;
}

function getQAttacks({ c, r }) {
  const attacks = [
    [c + 1, r],
    [c + 2, r],
    [c + 3, r],
    [c - 1, r],
    [c - 2, r],
    [c - 3, r],
    [c, r + 1],
    [c, r + 2],
    [c, r + 3],
    [c, r - 1],
    [c, r - 2],
    [c, r - 3],
  ];
}

const wnAttacks = getNAttacks(getWhitePosition('N'));
const bqPosition = getBlackQueenPosition();
const answer = wnAttacks.includes(bqPosition);

console.log('wnAttacks', wnAttacks);
console.log('bqPosition', bqPosition);
console.log('answer', answer ? 'YES' : 'NO');
