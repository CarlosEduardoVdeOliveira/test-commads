function isPrimo(num){
   if(num <= 1){
      return false
   }
   for (let i = 2; i < 10; i++) {
      if (num % i === 0) {
         return false
      }
   }
   return true
}

console.log(isPrimo(17));
console.log(isPrimo(21));
console.log(isPrimo(7));
console.log(isPrimo(47));
console.log(isPrimo(19));
