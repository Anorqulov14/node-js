const fs = require("fs");


const secret = fs.readFileSync("secret.txt", "utf-8").trim();

const encoded = secret
  .split("")
  .map(ch => {
    if (ch >= "A" && ch <= "Z") return ch === "Z" ? "A" : String.fromCharCode(ch.charCodeAt(0) + 1);
    if (ch >= "a" && ch <= "z") return ch === "z" ? "a" : String.fromCharCode(ch.charCodeAt(0) + 1);
    return ch;
  })
  .join("");

fs.writeFileSync("encoded.txt", encoded);
console.log("yaratildi:", encoded);
