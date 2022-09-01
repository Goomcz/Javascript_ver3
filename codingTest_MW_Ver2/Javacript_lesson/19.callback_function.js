// 내가 나중에 호출해줄게 ! 라는 개념

/* 
1. 일급 객체(first-class object)
: 일반 객체처럼 모든 연산이 가능한 것
- 함수의 매개변수로 전달
- 함수의 반환값
- 할당 명령문
- 동일 비교 대상

2. function 도 first-class object에 해당된다

3. 고차 함수 ( Higher-order function)
- 인자로 함수를 받거나(콜백함수)
- 함수를 반환하는 함수
*/

const add = (a,b) =>  {return a+b;} // call back 됨
const add1 = (a,b) => a+b; // call back 됨
const add3 = (a,b) => {a+b;} // 안됨
const multi = (a,b) =>  a*b;
const multi2 = (a,b) =>  {a*b;}
// { } : default 가 return 이 아니라 return을 써줘야 함
// { } X : 암시적 반환이라, return을 안써줘도 됨
// 



// a,b 그리고 action 이라는 함수를 전달받는다
// 여기서 action 을 call back 함수라고 한다
// 전달될 당시에 함수를 바로 호출해서 반환된 값을 전달하는 것이 아니라!
// 함수를 가르키고 있는 함수의 참조값이 전달되는 것이다!
// 그래서 함수는 고차함수 안에서 필요한 순간에! 호출이 되는 것이다
// 즉, calculator 내부의 action이라는 함수는 정의된 것이 아니다.
// calculator 함수는 a,b 라는 para와 action 이라는 call back 함수를 호출한다

function calculator(a,b,action){
    let result = action(a,b);
    console.log(result);
}

calculator(1, 2, multi2);


// quiz : 
// 주어진 숫자 만큼 0부터 순회하는 함수
// 단, 순회하면서 특정한 일을 수행해야 한다
// 숫자 5를 전달하고 순회하는 숫자를 다 출력하고 싶다
// 순회하는 숫자의 두배값을 다 출력하고 싶음
// 형태 : function iterate(max,action) 

let quizMulti = (a) => {return a*2;}

function iterate(max,action){
    for(let i=0; i<=max; i++){
        console.log(action(i));
    }
}

iterate(5,quizMulti);

