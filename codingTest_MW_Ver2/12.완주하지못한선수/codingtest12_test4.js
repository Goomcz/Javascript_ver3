// 22/08/28 마지막 시도 : filter 로 찾기 실패!

let participant = ['stanko','mislav', 'ana', 'ana','mislav'];
let participantCheck = new Set(participant); // ['stanko','mislav','ana']
let participantCompare = '';

let completion = ['stanko', 'mislav', 'ana','ana'];
let completionChekc =new Set(completion);
let completionNot_Array = participant.filter(ele => completion.includes(ele)===false);
var answer ='';
console.log(completionNot_Array);

if(completionNot_Array.length !==0){
    answer = completionNot_Array[0];
} 
//
else{
    let duplicatedParticipant = participant.filter(ele =>{
        if(participantCheck.has(ele)===true){
            participantCheck.delete(ele);
        } else {
            return ele;
        }
    });
    console.log(duplicatedParticipant);

    let duplicatedCompletion = completion.filter(ele =>{
        if(completionChekc.has(ele)===true){
            completionChekc.delete(ele);
        } else{
            return ele;
        }
    });
    console.log(duplicatedCompletion);

    for(let i=0; i<duplicatedParticipant.length; i++){
        if(duplicatedCompletion.includes(duplicatedParticipant[i])===false){
            answer = duplicatedParticipant[i];
            break;
        } else{
            continue;
        }
    }
}

console.log(answer);




// 시간 초과 건에 대해 할당 대신 splice 제거 시도 -> 실패
/*for(let i=0; i<participant.length; i++){
    
    if(completion.includes(participant[i]) === true){
        completion.splice(completion.indexOf(participant[i]),1)
    }
    else{
        answer = participant[i];
        break;
    }
}*/




// 시간 초과 건에 대해 검사 순서 바꿔봄 -> 실패 
/*for(let i=0; i<participant.length; i++){
    
    if(completion.includes(participant[i]) === true){
        completion[completion.indexOf(participant[i])] = '';  
    }
    else{
        answer = participant[i];
        break;
    }
}
*/

// 시간 초과 건에 대해 할당 대신 splice 제거 시도 -> 실패
/*for(let i=0; i<participant.length; i++){
    
    if(completion.includes(participant[i]) === true){
        completion.splice(completion.indexOf(participant[i]),1)
    }
    else{
        answer = participant[i];
        break;
    }
}
*/
