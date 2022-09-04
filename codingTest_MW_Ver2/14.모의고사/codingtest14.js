let answers = [3, 1, 1, 3, 2];
    var answer = [];
    let mathGiveup = [[1,2,3,4,5],[2,1,2,3,2,4,2,5],[3,3,1,1,2,2,4,4,5,5]];
    let countArray = {'count1' : 0, 'count2' : 0, 'count3' : 0 }; 
    for(let i=0; i<answers.length; i++){
        if(answers[i] === mathGiveup[0][i%5]){
            countArray['count1']+=1;
        } 
        if(answers[i] === mathGiveup[1][i%8]){
            countArray['count2']+=1;
        } 
        if(answers[i] === mathGiveup[2][i%10]){
            countArray['count3']+=1;
        }
    }
    let countMax = Math.max(...Object.values(countArray));    
if(countArray['count1']>=countMax){
    answer.push(1);
    }
    if(countArray['count2']>=countMax){
        answer.push(2);
        }
        if(countArray['count3']>=countMax){
            answer.push(3);
            }
    answer = answer.sort(function(a,b){
        return a-b;
    })
    console.log(answer);
    












