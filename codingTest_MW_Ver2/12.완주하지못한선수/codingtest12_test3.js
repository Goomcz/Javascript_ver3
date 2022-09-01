// 시간 초과 건에 대해 forEach 시도 실패
let participant = ['mislav', 'stanko', 'mislav', 'ana'];
let completion = ['stanko', 'ana', 'mislav']; 
var answer ='';

participant.forEach(ele => {

    if(completion.includes(participant[i]) === false){
        answer = participant[i];
        }
    
        else{
            completion[completion.indexOf(participant[i])] = ''; 
        }

});

console.log(answer);