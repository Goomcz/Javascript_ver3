let a = [1,2,4,5,3,3];

/*console.log(Math.max(...a)); // 전개 연산자 쓰지 않으면 NaN 나옴

a.sort(function(a,b){
return a-b;
});

console.log(a);
*/

let countObj = [{name : 1, count:0},{name : 2, count:0},{name : 3, count:0}];
let answer = [1, 2, 3, 4, 5, 1,2,3,4,5]; // 5개
let mathGiveup1 = [1,2,3,4,5];
let mathGiveup2 = [2,1,2,3,2,4,2,5];
let mathGiveup3 = [3,3,1,1,2,2,4,4,5,5];
for(let i=0; i<answer.length; i++){
    if(answer[i] === mathGiveup1[i] && i < 5){
        countObj[0].count+=1;
    } 
    else if(i>4 && answer[i] === mathGiveup1[i-5]){
        countObj[0].count+=1;
    }

    if(answer[i] === mathGiveup2[i] && i < 8){
        countObj[1].count+=1;
    } 
    else if(i>7 && answer[i] === mathGiveup2[i-8]){
        countObj[1].count+=1;
    }

    if(answer[i] === mathGiveup3[i] && i < 10){
        countObj[2].count+=1;
    } 
    else if(i>9 && answer[i] === mathGiveup3[i-10]){
        countObj[2].count3+=1;
    }
}


console.log(countObj);
countObj.sort(function(a,b){
    return a.count-b.count;
});
console.log(countObj);

console.log(Object.values(countObj));

