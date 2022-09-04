let n = 5; let lost =[2,4]; let reserve = [1,3,5];
let nArray = new Array(n).fill(1); // 모든 사람이 1개씩 있다고 가정
for(let i=1; i<=n; i++){
    if(lost.includes(i) === true){
    nArray[i-1] -= 1;} // 잃어버렸으면 -1

    else if(reserve.includes(i) === true){
    nArray[i-1] += 1; // 여벌 있으면 +1
    } 
}
console.log(nArray);
// 왼쪽에 있는 애가 빌려줘야 최대값이 나올거 같은데
for(let j=0; j<nArray.length; j++){
    if(nArray[j]===0){
        if(nArray[j-1]===2){
            nArray[j] +=1;
            nArray[j-1] -=1;
        }else if(nArray[j-1]!==2 && nArray[j+1]===2){
            nArray[j] +=1;
            nArray[j+1] -=1;
        }else if(nArray[j-1]===2 && nArray[j+1]===2){
            nArray[j] +=1;
            nArray[j-1] -=1;
        }
    }
}

console.log(nArray);
let zeroCount = 0;
nArray.forEach(ele => {
    if(ele === 0){
        zeroCount +=1;
    }
});

console.log(nArray.length - zeroCount);

