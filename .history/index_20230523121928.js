let count = 0
for (let i = 1; i < 10; i++) {
   if (2%i === 0) {
      
      if (count >= 2) {
         console.log('não é primo');
      }else{
         console.log('é primo');
      }
      count = count + 1
   }
}