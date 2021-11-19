
const accum=(str)=>{
// const result=str.split("").map((x,ind)=>
//   x.toUpperCase() + x.toLowerCase().repeat(ind)
// )
let result='';
str.split("").forEach((x,ind)=>{
  result += x.toUpperCase() + x.toLowerCase().repeat(ind)
  // if(ind<str.length-1)(result +='-')
  if(str[ind+1])(result +='-')
})
  // return result.join('-')
  return result
}
console.log(accum("RqaEzty"));