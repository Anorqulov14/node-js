const fs = require("fs");

const users = ["Ali", "Vali", "Gulbahor", "Sardor"];
fs.writeFileSync("users.txt", users.join("\n"));
console.log("fayl yaratildi");
