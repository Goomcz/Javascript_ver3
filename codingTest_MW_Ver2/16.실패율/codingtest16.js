// 이게 NaN 나오는 이유를 찾아라
// for 문 내부에서는 filter 함수를 사용하여 새로운 배열을 못만드나?

let stages = [2, 1, 2, 6, 2, 4, 3, 3];
let N = 5;
//  실패율의 내림차순 대로 스테이지 번호 리턴
let tryer = [];
let failer = [];
let failPercent = new Array().fill(0);

for(let i=1; i<N+1; i++){

    tryer = stages.filter(ele => {
    ele >= i
    });
    console.log(tryer);
    failer = stages.filter(ele => {
    ele <= i
    });
    console.log((failer.length) / (tryer.length));
    failPercent.push((failer.length) / (tryer.length));
    tryer.splice(0,tryer.length);
    failer.splice(0,failer.length);
}

console.log(failPercent);