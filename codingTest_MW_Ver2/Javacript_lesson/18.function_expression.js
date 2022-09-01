// 함수는 선언과, 특정 변수에 할당이 가능하다.
// 결국 함수도 객체이기 때문에

let add = function sum(a,b){
    return a+b;
};

console.log(add(1,2)); // 이렇게 함수 사용 가능!


// Arrow function  const functionName = (매개변수) => {  내용  }
// const name = () => {}
// function 이라는 키워드가 필요없음
let multi = (c,d) => c*d;
console.log('괄호 없을때 :' + multi(1,2));

let multi2 = (c,d) => {c*d;}
console.log('괄호 있을 때 : ' + multi(1,2));

let multi3 = (c,d) => {return c*d;}
console.log('괄호, 리턴 있을 때 : ' + multi(1,2));


// IIFE (Immediately-Invoked Function Expresssion)
// 함수를 즉각 실행할 수 있도록 하는 표현식
(function run(){
    console.log('ㅎㅎ');
}) ();


let test1 = (a,b) => {return a+b;}
let test2 = (a,b) => {a+b;}
let test3 = (a,b) => a+b;

const valueTest1 = test1(1,2);
const valueTest2 = test2(1,2);
const valueTest3 = test3(1,2);

console.log(valueTest1); // 됨 
console.log(valueTest2); // 안됨 : { } 있는데, return이 없으니까
console.log(valueTest2); // 안됨 : { } 없어서 암시적 반환, callback 함수를 의미함