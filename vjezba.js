

let arr= ['jedan', 'dva'];
function join(arr,token){
  const broj= arr.reduce((akumulator,val)=> akumulator + token + val);
}

const array1 = [3, 324, 12, 34];
const map1 = array1.map(x => x * 2+2*2%2);
console.log(map1);