const s1 = "07:05:45PM";
const s2 = "12:05:45AM";
const s3 = "12:05:45PM";
const s = "06:40:03AM";

const hour = s.substr(0, 2);
const minSec = s.substr(2, 6);
const noon = s.substr(-2, 2) === "PM";

let converted = "";

if (noon) {
  const milHour = (Number(hour) + 12).toString();
  converted = hour === "12" ? hour + minSec : milHour + minSec;
} else {
  converted = hour === "12" ? "00" + minSec : hour + minSec;
}

console.log(converted);
