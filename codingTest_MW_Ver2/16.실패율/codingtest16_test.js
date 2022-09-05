let stages = [2, 1, 2, 6, 2, 4, 3, 3];
let N = 5;
//  실패율의 내림차순 대로 스테이지 번호 리턴
// 문제에서 말하는 실패율:
// 스테이지에 도달했으나 아직 클리어 못한 플레이어  수 / 스테이지에 도달한 플레이어 수
let tryer = [];
let failer = [];
let failPercent = [];

for(let i=1; i<N+1; i++){
stages.filter(ele => {
    if(ele >=i){
        tryer.push(ele);        
    }
});
stages.filter(ele => {
    if(ele <=i){
        failer.push(ele);
    }

});
    console.log(tryer);
    console.log(failer);

    failPercent.push(failer.length/tryer.length);
    tryer.splice(0,tryer.length);
    failer.splice(0,failer.length);
}

console.log(failPercent);
