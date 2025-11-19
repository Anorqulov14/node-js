const fs = require("fs");


const text = fs.readFileSync("text.txt", "utf-8");
const words = text.split(/\s+/);
const longest = words.reduce((a, b) => (b.length > a.length ? b : a), "");
console.log("Eng uzun so‘z:", longest);
