function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

// Exemplos de uso:
console.log(isPrime(7));  // true
console.log(isPrime(10)); // false
console.log(isPrime(17)); // true