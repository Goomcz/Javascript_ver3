// for 문 ( Loop Statement)
// for( 변수 선언문; 조건식; 증감식) {}
// 실행 순서
// 1. 변수 선언문
// 2. 조건식의 값이 참이면 code block 수행
// 3. 증감식 수행
// 4. 조건식이 거짓이 될때 까지 2번 3번 반복

// <for 문의 기본 형태>
let result= '';
for(let i = 0; i<5; i++){
    for(let j=0; j<5; j++){
        result += '*';
    }
    result += '\n';
}
console.log(result);