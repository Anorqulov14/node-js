
export function add(a, b) {
  return a + b;
}

export const subtract = (a, b) => a - b;

export const multiply = (a, b) => a * b;

export function divide(a, b) {
  if (b === 0) throw new Error("0 ga bolish mumkin emas");
  return a / b;
}

export const pow = (a, b) => a ** b;

