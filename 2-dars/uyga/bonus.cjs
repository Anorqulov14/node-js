const fs = require("fs");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("nechi soni kerak? ", (n) => {
  n = parseInt(n);
  const fib = [0, 1];
  for (let i = 2; i < n; i++) fib.push(fib[i - 1] + fib[i - 2]);
  const result = fib.slice(1, n + 1).join("\n");
  fs.writeFileSync("fibonacci.txt", result);
  console.log("fibonacci.txt yaratildi");
  rl.close();
});
