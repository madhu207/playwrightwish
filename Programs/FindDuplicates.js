function duplicates(arr){

//[1,3,4,5,5,2,3,9]
const Uniqueelements = new Set();
const Duplicates = new Set();

for(let i =0; i<arr.length;i++){

    if(Uniqueelements.has(arr[i])){
        Duplicates.add(arr[i])
    }else{
        Uniqueelements.add(arr[i])
    }

}


return {

  unique:   Array.from(Uniqueelements),
  duplicates : Array.from(Duplicates)
}
   


}
const arr = [1,3,4,5,5,2,3,9]
console.log(duplicates(arr));