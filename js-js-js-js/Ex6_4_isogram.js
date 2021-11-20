const isogram =(str)=>{
    let arr= str.toLowerCase().split('');
    let result="";

    for(let letter of arr){
      result = arr.filter(word => word.includes(letter))
      if(Object.keys(result).length>1){return false}
    }
    return true
  }

console.log(isogram("Dermatoglyphics"));