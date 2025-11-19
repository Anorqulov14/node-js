const fs = require("fs");


const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const newId = data[data.length - 1].id + 1;
data.push({ id: newId, name: "Elbek" }); 
fs.writeFileSync("data.json", JSON.stringify(data, null, 2));
console.log("qoshildi:", newId);
