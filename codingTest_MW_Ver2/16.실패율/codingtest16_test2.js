// 실패율 자체를 구하는 것 까지는 했는데, 각 스테이지에서의 실패율이 얼마고
// 실패율 별로 스테이지 번호를 정렬하는 것 해야함
let stages = [2, 1, 2, 6, 2, 4, 3, 3];
let N = 5;

let tryer = []; let failer = []; 
let failPercent = [];
for(let i=1; i<N+1; i++){
stages.filter(ele => {
    if(ele >=i){
        tryer.push(ele);        
    }});
tryer.filter(ele => {
    if(ele === i){
        failer.push(ele);
    }});
    failPercent.push(failer.length/tryer.length);
    tryer.splice(0,tryer.length);
    failer.splice(0,failer.length);
}

console.log(failPercent);