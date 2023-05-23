const array = [7, 9, 11, 20, 30]

for (let i = 1; i < 10; i++) {
   let count = 0
   if (4%i === 0) {
      count += 1
      if (count > 2) {
         console.log('não é primo');
      }else{
         console.log('é primo');
      }
   }
}