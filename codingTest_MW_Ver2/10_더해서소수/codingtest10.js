let nums = [1, 2, 7, 6, 4];
let numsMy = Array.from(nums);
var answer;
let nums_rdm_index = 0;
let nC3 = ((nums.length)*(nums.length-1)*(nums.length-2))/6;
console.log('갯수:' + nC3);
let nums_rdm_sum =0;
let nums_rdm_sum_Array = [];

let notPrimeCounts =0;

while(nums_rdm_sum_Array.length < nC3){
    for(let i=0; i<3; i++){
    nums_rdm_index = Math.floor(Math.random()*numsMy.length);
    nums_rdm_sum += numsMy[nums_rdm_index];
    numsMy.splice(nums_rdm_index,1);
    }

    if(nums_rdm_sum_Array.includes(nums_rdm_sum) === false){
        nums_rdm_sum_Array.push(nums_rdm_sum);
        nums_rdm_sum =0;
        numsMy = Array.from(nums);
    }
    
    else{
        nums_rdm_sum =0;
        numsMy = Array.from(nums);
    }
}

console.log(nums_rdm_sum_Array);
//-----------서로 다른 3개 숫자의 합 배열 완성------------------------------------


nums_rdm_sum_Array.forEach(ele => {
    for(let k=2; k<=Math.floor(Math.sqrt(ele)); k++){
        if(ele % k === 0){
            notPrimeCounts++;
            break;
            } 
        }
});

answer = (nums_rdm_sum_Array.length - notPrimeCounts);
console.log(answer);