function isPrime(n) {
  if (n <= 1) return false; 

  for (let i = 2; i <= Math.sqrt(n); i++) { 
    if (n % i === 0) return "tub emas";
  }
  return "tub"; 
}

module.exports = isPrime

