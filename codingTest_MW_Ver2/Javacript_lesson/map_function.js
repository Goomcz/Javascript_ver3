// map 은 key 와 value로 이루어진 자료 구조 !
// key 는 유일하며 value는 중복 가능하고 순서가 상관이 없다
// object와 비슷한 느낌?

const map = new Map([
    ['key1','apple'],
    ['key2','banana'],
]);
console.log(map);

// map 의 장점
// 사이즈 확인/존재 유무 확인/ 순회/ 찾기 /추가 /삭제/ 전부 삭제 모두 가능 !
// 1. 사이즈 확인
console.log(map.size);
// 2. 존재 확인(key로 확인)
console.log(map.has('key1')); // true
console.log(map.has('key6')); //false

// 3. map에서 제공하는 forEach를 활용한 순회
map.forEach((key,value)=> console.log(key,value));

// 4. key 값들, value 값들만 따로 추출 가능하며 전체 추출도 가능하다 
console.log(map.keys());
console.log(map.values());
console.log(map.entries());

// 5. 찾기
console.log(map.get('key1'));
console.log(map.get('key4')); // display undefined

// 6. 추가(by key)
console.log(map.set('key3','orange'));

// 7. 삭제(by key)
map.delete('key3');
console.log(map);

map.clear(map);
console.log(map);

// 8. 오브젝트와의 차이점은?
const key = {name: 'milk', price : 10};
const milk = {name : 'milk', price: 10, description : '우유조아'};

const obj ={[key]:milk,};
const map2 = new Map([[key,milk]]);
console.log(obj);
console.log(map2);

// 구조적으로는 비슷하나, map에서 사용하는 함수를 object에서는 사용 못한다
console.log(obj[key]); // key 에 해당하는 내용이 출력됨
console.log(map2[key]); //undefined

console.log(map2.get(key)); // get을 이용하여 탐색 가능

