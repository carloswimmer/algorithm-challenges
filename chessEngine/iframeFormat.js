const wh = [
  ['N', 'B', '2'],
  ['Q', 'B', '1'],
];

const bl = [['Q', 'A', '4']];

const mv = 1;

function verticalAttacks(c, r) {
  const attacks = [
    [c + 1, r],
    [c + 2, r],
    [c + 3, r],
    [c - 1, r],
    [c - 2, r],
    [c - 3, r],
  ];

  return attacks;
}

function horizontalAttacks(c, r) {
  const attacks = [
    [c, r + 1],
    [c, r + 2],
    [c, r + 3],
    [c, r - 1],
    [c, r - 2],
    [c, r - 3],
  ];

  return attacks;
}

function diagonal45Attacks(c, r) {
  const attacks = [
    [c + 1, r + 1],
    [c + 2, r + 2],
    [c + 3, r + 3],
    [c - 1, r - 1],
    [c - 2, r - 2],
    [c - 3, r - 3],
  ];

  return attacks;
}

function diagonal315Attacks(c, r) {
  const attacks = [
    [c + 2, r - 1],
    [c + 1, r - 2],
    [c + 3, r - 3],
    [c - 1, r + 1],
    [c - 2, r + 2],
    [c - 3, r + 3],
  ];

  return attacks;
}

function getInnerBoardFormatted(attacks) {
  const possibles = attacks.filter((att) => att[0] >= 0 && att[1] >= 1);
  const stringfied = possibles.map((item) => item.join(''));

  return stringfied;
}

function getQAttacks(coordinates) {
  let attacks = [];

  if (coordinates) {
    const { c, r } = coordinates;
    attacks = [
      ...verticalAttacks(c, r),
      ...horizontalAttacks(c, r),
      ...diagonal45Attacks(c, r),
      ...diagonal315Attacks(c, r),
    ];
  }

  return attacks.length ? getInnerBoardFormatted(attacks) : attacks;
}

function getRAttacks(coordinates) {
  let attacks = [];

  if (coordinates) {
    const { c, r } = coordinates;
    attacks = [...verticalAttacks(c, r), ...horizontalAttacks(c, r)];
  }

  return attacks.length ? getInnerBoardFormatted(attacks) : attacks;
}

function getBAttacks(coordinates) {
  let attacks = [];

  if (coordinates) {
    const { c, r } = coordinates;
    attacks = [...diagonal45Attacks(c, r), ...diagonal315Attacks(c, r)];
  }

  return attacks.length ? getInnerBoardFormatted(attacks) : attacks;
}

function getNAttacks(coordinates) {
  let attacks = [];

  if (coordinates) {
    const { c, r } = coordinates;
    attacks = [
      [c - 2, r + 1],
      [c - 2, r - 1],
      [c - 1, r + 2],
      [c - 1, r - 2],
      [c + 1, r + 2],
      [c + 1, r - 2],
      [c + 2, r + 1],
      [c + 2, r - 1],
    ];
  }

  return attacks.length ? getInnerBoardFormatted(attacks) : attacks;
}

function simplifiedChessEngine(whites, blacks, moves) {
  const cols = ['A', 'B', 'C', 'D'];

  function getWhitePosition(t) {
    let coordinates = null;

    const position = whites.find((item) => item[0] === t);

    if (position) {
      position[1] = cols.indexOf(position[1]);
      coordinates = {
        c: position[1],
        r: Number(position[2]),
      };
    }

    return coordinates;
  }

  function getBlackQueenPosition() {
    const position = blacks.find((item) => item.includes('Q'));
    position[1] = cols.indexOf(position[1]);
    position.shift();
    const stringfied = position.join('');

    return stringfied;
  }

  const wNAttacks = getNAttacks(getWhitePosition('N'));
  const wBAttacks = getBAttacks(getWhitePosition('B'));
  const wRAttacks = getRAttacks(getWhitePosition('R'));
  const wQAttacks = getQAttacks(getWhitePosition('Q'));
  const allAttacks = [...wNAttacks, ...wBAttacks, ...wRAttacks, ...wQAttacks];
  const bQPosition = getBlackQueenPosition();
  const answer = allAttacks.includes(bQPosition);

  return answer ? 'YES' : 'NO';
}

console.log(simplifiedChessEngine(wh, bl, mv));
