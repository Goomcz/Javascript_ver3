// 속도 개선 필요
let participant = ['mislav', 'stanko', 'mislav', 'ana'];
let participantNew = []; // ['a','b','c']
let completion = ['stanko', 'ana', 'mislav']; 
let Myanswer = [];
var answer ='';

for(let i=0; i<participant.length; i++){
    
    if(completion.includes(participant[i]) === false){
    Myanswer.push(participant[i]);
    answer = Myanswer[0];
    break;
    }

    else{
        completion[completion.indexOf(participant[i])] = ''; 
    }
}

console.log(answer);