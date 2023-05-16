const fs = require("fs");

const textIn = fs.readFileSync("waheed.txt", "utf-8");
console.log(textIn);
//now writing into the file

const textOut = `let me try to do somethings that is worth more than my expectio ${Date.now()} \n`;
fs.writeFileSync("./goals.txt", textOut);
console.log("file output let see");

// let me try this read form one file and put into another file:

// fs.writeFileSync("./goals.txt",textIn);
// console.log("let see is this work and piching the data from that file");

 
