// return 이란 무엇인가?
// 함수 내부에서 어떠한 연산을 수행한 값을 반환하는 역할이면서 동시에 함수를 종료 시키는 역할까지
function add(a,b){
    return a+b;
// return 을 명시하지 않으면, 자동으로 return undefined 가 실행된다
}
const result = add(1,2);

console.log(result);

// 단순히 무언가를 프린트하는 함수라면 return 생략 가능?
// 특정한 일을 수행하는 함수가 아니라면 return 필요 없음
function print(text){
    console.log(text);
}
print('text');

// <return 의 역할>
function print2(num){
    if(num<0){
        return; // return undefined; 랑 똑같다고 보면 됨
        // 함수의 실행에 맞는 요건이 아닐 때 함수가 조기 종료 됨
    }
    console.log(num);
}

print2(9); // 실행됨
print2(-11); // 실행 안됨