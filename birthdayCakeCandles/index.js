const n = 4;
const candles = [3, 2, 1, 3];

const taller = Math.max(...candles);

const tallers = candles.filter((candle) => candle === taller);

console.log(tallers.length);
