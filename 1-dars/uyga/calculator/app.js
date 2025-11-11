import { add, subtract, multiply, divide, pow } from './operations.js';
import { PI, E, GOLDEN_RATIO } from './constants.js';

console.log("=== Hisoblash ===");
console.log("5 + 3 =", add(5, 3));
console.log("10 - 2 =", subtract(10, 2));
console.log("6 * 7 =", multiply(6, 7));
console.log("20 / 5 =", divide(20, 5));
console.log("2 ^ 4 =", pow(2, 4));

console.log("\n=== Konstantalar ===");
console.log("PI =", PI);
console.log("E =", E);
console.log("GOLDEN_RATIO =", GOLDEN_RATIO.toFixed(5));
