"use strict";
let week = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
let d = new Date();
document.write(d + "<br>");
// document.write(d.getDate() + "." + (d.getMonth() + 1) + "." + d.getFullYear());
document.write(
  `${d.getDate()}.${
    d.getMonth() + 1
  }.${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} ${
    week[d.getDay()]
  }`
);
document.write("<br>" + d.getTime());
let dStart = new Date();
let dStop = new Date();
let dif = dStop.getTime() - dStart.getTime();
console.log(Math.round(dif/1000));
