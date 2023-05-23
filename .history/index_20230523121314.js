const array = [7, 9, 11, 20, 30]

for (let i = 0; i < 10; i++) {
   let count = 0
   if (array[i]%i === 0) {
      console.log(count++);
   }
}