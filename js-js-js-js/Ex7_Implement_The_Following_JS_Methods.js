const jsMethods =(arr)=>{
  // const filterExm = arr.filter(word => word===1)
  // let forEacExm=[];
  // arr.forEach((x)=>{
  //     return forEacExm[x]= x+2;
  //   })
  // const mapExm= arr.map(x => x + 2)
//!22222222222222222222222222222222

  const filterExm = arr.filter(word => word.includes('f'))
  let forEacExm=[];
  // arr.forEach((x)=>{
  //     return forEacExm[x]= x+2;
  //   })
  arr.forEach((x,ind)=>{
      return forEacExm[ind]= x+'aaa';
    })
  // const mapExm= arr.map(x => x + 2)
  const mapExm= arr.map(x => x + 'aaa')
  
  return `The result of Filter method: ${filterExm}, The result of ForEach method: ${forEacExm}, The result of Map method: ${mapExm}`
}
// let arrExm=[1,2,8,3,5];
let arrExm=['rsger','bgdt','drtgbed','fgd'];
console.log(jsMethods(arrExm));