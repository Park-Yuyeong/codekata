let star1 = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    star1 += "*";
  }
  star1 += "\n";
}
console.log(star1);

let star2 = "";
for (let i = 5; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    star2 += "*";
  }
  star2 += "\n";
}
console.log(star2);

let star3 = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    star3 += i > j ? " " : "*";
  }
  star3 += "\n";
}
console.log(star3);

let star4 = "";
for (let i = 5; i >= 1; i--) {
  for (let j = 1; j <= 5; j++) {
    star4 += i > j ? " " : "*";
  }
  star4 += "\n";
}
console.log(star4);
