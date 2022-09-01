let a=[1,2,3,4];
let b=[-3,-1,0,2];
let result=0; // 초기화?

for(let i=0; i<a.length; i++){
    result += a[i]*b[i];
}

console.log(result);