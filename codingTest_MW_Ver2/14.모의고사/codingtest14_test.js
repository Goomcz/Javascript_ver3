let a = [1,2,4,5,3,3];

/*console.log(Math.max(...a)); // 전개 연산자 쓰지 않으면 NaN 나옴

a.sort(function(a,b){
return a-b;
});

console.log(a);
*/

let count1 = 0;
let count2 = 0;
let count3 = 0;
let answer = [1, 2, 3, 4, 5, 1,2,3,4,5]; // 5개
let mathGiveup1 = [1,2,3,4,5];
let mathGiveup2 = [2,1,2,3,2,4,2,5];
let mathGiveup3 = [3,3,1,1,2,2,4,4,5,5];
for(let i=0; i<answer.length; i++){
    if(answer[i] === mathGiveup1[i] && i < 5){
        count1+=1;
    } 
    else if(i>4 && answer[i] === mathGiveup1[i-5]){
        count1+=1;
    }

    if(answer[i] === mathGiveup2[i] && i < 8){
        count2+=1;
    } 
    else if(i>7 && answer[i] === mathGiveup2[i-8]){
        count2+=1;
    }

    if(answer[i] === mathGiveup3[i] && i < 10){
        count3+=1;
    } 
    else if(i>9 && answer[i] === mathGiveup3[i-10]){
        count3+=1;
    }
}

let countMap = new Map([[count1,1],[count2,2],[count3,3]]);
let countArray = [count1,count2,count3];
let countMax = Math.max(...countArray);
console.log(countMax);
let realAnswer = [];
for(let j=0; j<countArray.length; j++){
    if(countArray[j]>=countMax){
        realAnswer.push(countMap.get(countArray[j]));
    }
}
console.log(realAnswer);
/*let mathKing = [countObj[2]];
if(countObj[2]===countObj[1]===countObj[0]){
mathKing.push(countObj[1]);
mathKing.push(countObj[0]);
} else if(countObj[2]===countObj[1]){
    mathKing.push(countObj[1]);
}

console.log(MathKing);*/