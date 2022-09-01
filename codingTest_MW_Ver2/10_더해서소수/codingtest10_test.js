let nums = [1, 2, 7, 6, 4];
var answer;
let sumArray = [];
let notPrimeCounts =0;

for(let i=0; i<nums.length-2; i++){
    for(let j= i+1; j<nums.length-1; j++){
        for(let k= j+1; k<nums.length; k++){
            sumArray.push(nums[i]+nums[j]+nums[k]);
        }
    }
}

console.log(sumArray);

sumArray.forEach(ele => {
    for(let k=2; k<=Math.floor(Math.sqrt(ele)); k++){
        if(ele % k === 0){
            notPrimeCounts++;
            break;
            } 
        }
    });

    answer = (sumArray.length-notPrimeCounts);
console.log(answer);