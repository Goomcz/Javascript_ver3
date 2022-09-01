// 동등 비교 관계 연산자

// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘다 같음
//  !=== 값다 타입이 둘다 다름

console.log(2 != 2);
console.log(2 != 3);
console.log(2 == 3);
console.log(2 == '2');
console.log(2 === '2');
console.log(true == 1); // 1은 boolean 에서 true 이므로 참
console.log(true === 1); // 그러나 타입은 다르므로 거짓
console.log(false == 0); // 마찬가지 0 은 boolean 에서 false 이므로 참
console.log(false === 0); // 하지만 타입은 다르므로 거짓


//* object 들끼리의 equality */

const obj1 = { name : 'js'};
const obj2 = { name : 'js'};
console.log(obj1==obj2); // 객체의 내용으 heap area에 저장되고, obj1, obj2 는 단순히 heap area의 위치만을 pointing
// 하므로, 당연히 false 가 나온다 !

console.log(obj1.name == obj2.name); // 이건 참