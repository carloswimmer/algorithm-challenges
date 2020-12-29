const example = ["a", 5, ["John", 4, 7, [18, "8", 11]], 9, [100, "cem"]];
const example0 = ["0", 0, ["0", 0, 0, [0, "0", 0]], 0, [0, "zero"]];
const exampleEmpty = [];
const exampleNull = null;

function sumEvens(list) {
  let raw = [];
  const valids = [];

  if (list) raw = [...list];

  while (raw.length) {
    raw.forEach((item) => {
      if (typeof item === "object") {
        let index = raw.indexOf(item);
        raw.splice(index, 1);
        raw = [...raw, ...item];
      }
    });

    raw.forEach((item) => {
      if (!isNaN(item)) {
        let index = raw.indexOf(item);
        raw.splice(index, 1);
        if (item % 2 === 0) valids.push(item);
      }
    });

    raw.forEach((item) => {
      if (typeof item === "string") {
        let index = raw.indexOf(item);
        raw.splice(index, 1);
      }
    });
  }

  const sum = valids.reduce((acc, value) => acc + value, 0);

  console.log("total", sum);
}

sumEvens(example);
sumEvens(example0);
sumEvens(exampleEmpty);
sumEvens(exampleNull);
