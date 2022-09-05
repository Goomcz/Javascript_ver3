// 각 스테이지 별로 실패율을 나타내는 오브젝트 까지 완성
let stages = [2, 1, 2, 6, 2, 4, 3, 3];
let N = 5;
let tryer = []; 
let failer = []; 
let failPercent = {};

function MakeFailPercentObj(failPercent,key,value){
    failPercent[key] = value;
}
for(let i=1; i<N+1; i++){
stages.filter(ele => {
    if(ele >=i){
        tryer.push(ele);        
    }});
tryer.filter(ele => {
    if(ele === i){
        failer.push(ele);
    }});
    MakeFailPercentObj(failPercent,i,(failer.length/tryer.length));
    tryer.splice(0,tryer.length);
    failer.splice(0,failer.length);
}

console.log(failPercent);