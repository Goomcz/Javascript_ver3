/*1번 수포자가 찍는 방식: 1, 2, 3, 4, 5  / 5개
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5  / 8개
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5 / 10개 
*/
let answer = [1, 2, 3, 4, 5]; // 5개

let mathGiveup1 = [1,2,3,4,5];
let count1 = 0;

let mathGiveup2 = [2,1,2,3,2,4,2,5];
let count2 = 0;

let mathGiveup3 = [3,3,1,1,2,2,4,4,5,5];
let count3 = 0;

for(let i=0; i<answer.length; i++){
    if(answer[i] === mathGiveup1[i] && i < 5){
        count1 += 1;
    } 
    else if(i>5 && anwer[i] === mathGiveup1[i-5]){
        count1 += 1;
    }

    if(answer[i] === mathGiveup2[i] && i < 8){
        count2 += 1;
    } 
    else if(i>8 && anwer[i] === mathGiveup2[i-8]){
        count2 += 1;
    }

    if(answer[i] === mathGiveup3[i] && i < 10){
        count3 += 1;
    } 
    else if(i>10 && anwer[i] === mathGiveup3[i-10]){
        count3 += 1;
    }
}










