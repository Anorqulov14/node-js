const fs = require("fs");

const numbers = fs.readFileSync("numbers.txt", "utf-8").trim().split("\n").map(Number);
const reversed = numbers.reverse().join("\n");
fs.writeFileSync("reversed.txt", reversed);
console.log("fayl yaratildi");
