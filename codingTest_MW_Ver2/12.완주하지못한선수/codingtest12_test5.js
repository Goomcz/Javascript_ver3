let participant = ["leo", "kiki", "eden"]; // 중복 : ['mislav', 'ana'];
let completion = ["eden", "kiki"]; //  중복 완주 : ['ana']
var answer ='';

participant.sort();
completion.sort();

for(let i=0; i<completion.length; i++){
    if(completion[i]!== participant[i]){
        answer = participant[i];
        break;
    }
}
if(answer ===''){
    answer = participant[participant.length-1];
}
console.log(answer);


