// function 의 memory는 어떻게 저장되는가?

function add(a,b){
    return a+b;
}

const sum = add;

console.log(add(1,2));
console.log(sum(1,2));
// 함수 이름 자체는, heap memory에 내장된 함수의 기능들의 위치를 가르키는 것이다.
// 따라서 add를 sum에 할당하면, sum으로도 함수를 호출할 수 있다.