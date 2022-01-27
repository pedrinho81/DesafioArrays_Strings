let array = [0, 3, 4, 6, 80, 12, 23, 90, 51]

array.forEach(function(item, i) {


     if (item === 0){
         console.log(`O valor ${item} já é 0!`);
     }
     if (item % 2 != 0) {
         array[i] = 0
         
         console.log(`O valor ${item} foi alterado para 0!`)   
     } else if (item % 2 === 0 && item != 0) {
         console.log(`O valor ${item} já é par!`)
     }
     
     
    })