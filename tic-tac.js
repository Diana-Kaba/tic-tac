"use strict";
let tick = true;
let t;
let count = 0;

function ticker(n, d) {
  if (count == 0) {
    let d = new Date();
  }
  let d1 = new Date();
  if (tick) {
    document.write("Тик " + d1.getTime() + " ");
    tick = false;
  } else {
    document.write("Так " + d1.getTime() + " ");
    tick = true;
  }
  count++;
  // if (count == n) {
  //   clearInterval(t);
  // }
  if ((d1.getTime() - d.getTime()) / 1000 == n) {
    clearInterval(t);
  }
}
let d = new Date();
t = setInterval(ticker, 1000, 10, d);
