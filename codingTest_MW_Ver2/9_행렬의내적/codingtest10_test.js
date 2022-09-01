let a=[1,2,3,4,5];
let b=[-3,-1,0,2];

function solution(a){ 

    var answer = a.reduce((acc,cur,idx) => acc -= cur,0); 
    return answer;
}

console.log(solution(a));