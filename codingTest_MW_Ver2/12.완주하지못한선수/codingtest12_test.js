// 알고리즘 자체 오류
let participant = ['a','b','c'];
let participantNew = new Set(participant);
let completion = ['a','b']; 
let answer = [];


for(let j=0; j=participant.length; j++){
    if(completion.includes(participant[j]) === false){
        answer.push(participant[j]);
        break;
    } else{
        continue;
    }
}

if(answer.length ===0){
    for(let i=0; i<participant.length; i++){
        if(participantNew.includes(participant[i])===true){
            answer.push(participant[i]);
            break;
        }
    }
    console.log(answer);
} else{

    console.log(answer);
}

