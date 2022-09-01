let nums = [3,3,3,2,2,4];
let select = nums.length / 2;
let counts = 0;
let numsNew = new Set(nums);

numsNew.size >= select ? counts=select : counts=numsNew.size;

var answer = counts;
console.log(answer);
