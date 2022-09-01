let participant = ['a','a','b','c'];
let participantNew = [];
let completion = ['a','b','c']; // a 
let answer = [];


participant.forEach(element => {
    if(completion.includes(element)===false){
        answer.push(element);
    } 
});

if(answer.length ===0){
    for(let i=0; i<participant.length; i++){
        if(participantNew.includes(participant[i])===false){
            participantNew.push(participant[i]);
        } else{
            answer.push(participant[i]);
            break;
        }       
    }
}

console.log('case2:' + answer);