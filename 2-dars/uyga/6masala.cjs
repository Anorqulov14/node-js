const fs = require("fs");

const now = new Date();
const log = `[${now.toISOString().replace("T", " ").slice(0, 19)}] Program started\n`;
fs.appendFileSync("logs.txt", log);
console.log("yozildi:", log.trim());
