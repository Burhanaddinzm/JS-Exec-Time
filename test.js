"use strict";

const test = () => {
  const start = performance.now();

  const numberArray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
  ];
  let output = 0;
  const len = numberArray.length;
  let i = 0;

  //   while (i < len) {
  //     output += numberArray[i];
  //     i++;
  //   }

  //   for (const item of numberArray) {
  //     output += item;
  //   }

  // for (let i = 0; i < len; i++) {
  //   output += numberArray[i];
  // }

  //   numberArray.forEach((num) => (output += num));

  const end = performance.now();

  console.log(`Program ran in ${(end - start).toFixed(3)} ms`);
};

for (let i = 0; i < 10; i++) {
  test();
}
