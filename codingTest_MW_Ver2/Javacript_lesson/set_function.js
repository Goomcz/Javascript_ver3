// Set : 세트, 말 그대로 하나의 집합체
// 중요! 중복이 불가능 하다


// 0. set 과 set 으로 중복 없는 배열 만들기
const set = new Set([1,2,3]);
console.log(set);

const testArr = ['a','b','b','c'];
const satArr = new Set(testArr);
const newArr = [...satArr];


const new2Arr = [...new Set(testArr)]; // 위의 두 식을 합쳐서 만든거
console.log(testArr);
console.log(satArr);
console.log(newArr);
console.log(new2Arr);



// Set 함수의 여러 기능들

// 1. 배열의 사이즈
console.log(set.size);

// 2. 배열 안에 특정 ele이 존재하는지 확인
console.log(set.has(2));
console.log(set.has(6));

// 3. 순회 기능( forEach)
set.forEach(element => console.log(element));

for(const value of set.values()){
    console.log(value);
}

// 4. 새로운 아이템 추가

set.add(6);
console.log(set);
set.add(6);
console.log(set); // Set은 중복 안되니까 !


// 5. 아이템 삭제 기능
set.delete(6);
console.log(set);
set.clear();
console.log(set); // 전부 삭제 기능


// 6. 오브젝트 세트 만들기

const obj1={name : 'apple', price:8};
const obj2={name : 'orange', price:10};
const obj3={name : 'grape', price:12};
const objs=new Set([obj1,obj2]);
console.log(objs);

// obj 에 접근하여 새로운 값 할당 가능
obj1.price = 20;
objs.add(obj1);
console.log(objs);
// obj4 를 objs에 추가
const obj4={name : 'banana', price:30};
objs.add(obj4);
console.log(objs);
// obj4와 동일한 값을 가지는 obj5 추가 가능? -> 가능!
// 왜? obj는 heap area에 할당되고, memory에는 참조값만 저장됨
const obj5={name : 'banana', price:30};
objs.add(obj5);
console.log(objs);

