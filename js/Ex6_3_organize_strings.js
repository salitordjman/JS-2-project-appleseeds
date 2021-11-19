const theLongestPossible =(str1,str2)=>{
  // let strLong= (str1+str2).split('');
  // let strEnd=strLong[0];
  // for(let i=0; i<strLong.length;i++){
  //   let count=0
  // for(let j=0; j<strEnd.length;j++){
  //   if(strLong[i]===strEnd[j]){
  //     count++;
  //   }
  // }
  // if(count===0){
  //   strEnd+=strLong[i];
  // }
  // }
  // return `${strEnd.split('').sort().join('')}`
  //!222222222222222222222222222222222
  // let obj={};
  // (str1+str2).split('').forEach((x)=>{
    //   return obj[x]= (obj[x]||0)+1
    // })
    //   return `${Object.keys(obj).sort().join('')}`
    //!33333333333333333333333333333333333333333333333
    let strLong= (str1+str2).split('');
    let strEnd=strLong[0];
    for(let letter of strLong){
      // if(!strEnd.includes(letter)){strEnd+=letter}
      (!strEnd.includes(letter))&&(strEnd+=letter)
    }
    return `${strEnd.split('').sort().join('')}`
  }

let a="xyaabbbccccdefww";
let b="xxxxyyyyabklmopq";
console.log(theLongestPossible(a,b));