const lottos=[1,2,3,4,5,6];
const win_nums=[2,5,10,11,9,34];

function solution(lottos, win_nums) {
    const lottosMap = new Map([Array.from(lottos)]);
    let counts = 0;
    let maxRank = new Array();
    let minRank = new Array();
    let sum= lottos[0]+lottos[1]+lottos[2]+lottos[3]+lottos[4]+lottos[5];
    if(sum==0){
    maxRank.push(1);
    minRank.push(6);
    }
    else{
    
    for(let i = 0; i<win_nums.length; i++){
        if(lottos.includes(win_nums[i]) == true){
            counts+=1;
    
            if(counts == 0){
                maxRank.push(5);
                minRank.push(6);
            } 
            if(counts == 1){
                maxRank.push(4);
                minRank.push(6);
            }
            if(counts == 2){
                maxRank.push(3);
                minRank.push(5);
            }
            if(counts == 3){
                maxRank.push(2);
                minRank.push(4);
            }
            if(counts == 4){
                maxRank.push(1);
                minRank.push(3);
            }

        }}
    
    }
    var answer = maxRank.concat(minRank);
    return answer;
}