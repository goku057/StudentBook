let d = new Date();
console.log(d.getUTCDate());
// let s = "asdjhasjkdhkasjdhkasjdhaksjdhaksjdhaskjdhksajdhkasdhksad";
// console.log(s.slice(0, 1000));
var dateFormat = require("dateformat");
console.log(d);
var de = new Date("2020-04-13T00:00:00.000+08:00"); /* midnight in China on April 13th */
console.log(de);
de.toLocaleString('en-US', { timeZone: 'America/New_York' });
console.log(de);
console.log(dateFormat("2020-04-13T00:00:00.000+08:00", "dddd, mmmm dS, yyyy, h:MM:ss TT"));