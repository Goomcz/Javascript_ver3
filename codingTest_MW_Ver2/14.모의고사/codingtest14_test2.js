// 단순 for 문 3개 속도 실패
let answers = [3, 3, 2, 2, 3];
    var answer = [];
    let mathGiveup = [[1,2,3,4,5],[2,1,2,3,2,4,2,5],[3,3,1,1,2,2,4,4,5,5]];
    let countArray = {'count1' : 0, 'count2' : 0, 'count3' : 0 };
    for(let i=0; i<answers.length; i++){
        if(i>4){ i = 0; }
        if(answers[i]===mathGiveup[0][i]){
            countArray['count1'] +=1;
        }
    }
    for(let j=0; j<answers.length; j++){
        if(j>7){j = 0;}
        if(answers[j]===mathGiveup[1][j]){
            countArray['count2'] +=1;
        } 
    }
    for(let k=0; k<answers.length; k++){
        if(k>9){ k = 0;}
        if(answers[k]===mathGiveup[2][k]){
            countArray['count3'] +=1;
        }
    }
    let countMax = Math.max(...Object.values(countArray)); // 전개연산자 없으면 NaN
    if(countArray['count1'] === countMax){
        answer.push(1);
    }
    if(countArray['count2'] === countMax){
        answer.push(2);
    }
    if(countArray['count3'] === countMax){
        answer.push(3);
    }

    answer = answer.sort(function(a,b){
        return a-b;
    })

    console.log(answer);