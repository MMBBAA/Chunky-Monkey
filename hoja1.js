function chunkArrayInGroups(arr, size) {
 
  var rdo=[];
  var contador=0;
  while(contador<arr.length){
  
    rdo.push(arr.slice(contador,contador+size));

    contador+=size;
    }
  return rdo;

  }
   
  


chunkArrayInGroups(["a", "b", "c", "d"], 2);