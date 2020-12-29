const example = ["a", 5, ["John", 4, 7, [18, "8", 11]], 9, [100, "cem"]];
const example0 = ["0", 0, ["0", 0, 0, [0, "0", 0]], 0, [0, "zero"]];
const exampleEmpty = [];
const exampleNull = null;

function getFirstObject(array) {
  return array.find((item) => typeof item === "object");
}

function sumEvens(list) {
  let raw = [];

  if (list) raw = [...list];

  while (getFirstObject(raw)) {
    const firstObject = getFirstObject(raw);
    const others = raw.filter((item) => item !== firstObject);

    raw = [...firstObject, ...others];
  }

  const valids = raw.filter(
    (item) => typeof item === "number" && item % 2 === 0
  );

  const sum = valids.reduce((acc, value) => acc + value, 0);

  console.log("total", sum);
}

sumEvens(example);
sumEvens(example0);
sumEvens(exampleEmpty);
sumEvens(exampleNull);
