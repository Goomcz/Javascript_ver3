function solution(absolutes, signs) {
    var answer=0;
    
    for(let i=0; i<signs.length; i++){
        if(signs[i]==true){
            absolutes[i]*=1;
            answer += absolutes[i];
        }
        else{
            absolutes[i]*=-1;
            answer += absolutes[i];
        }
    }   
    
    return answer;
}

console.log(solution([4,7,12],[true,false,true]));