
const countTheNumber = str=>{
  let obj={};
  let objEnd={};
  str.toLowerCase().split('').forEach((x)=>{
    return obj[x]= (obj[x]||0)+1
  })
  for(let elObj in obj){
    if(obj[elObj]>1) objEnd[elObj]=obj[elObj];
  }

  if(Object.keys(objEnd)<1) {return "0 # no characters repeats more than once"}
  else{
    
    return `${Object.keys(objEnd).length} # characters: ${Object.keys(objEnd)}, and repeats: ${Object.values(objEnd)} times`
  }
}
console.log(countTheNumber('aa1wwwwwwwa1b1cgd1bwwwwwwwww1be1'));