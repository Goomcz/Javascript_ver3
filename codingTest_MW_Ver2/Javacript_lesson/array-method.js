// 배열의 함수들
// 배열 자체를 변경하는지, 새로운 배열을 반환하는지

const fruits = ['banana','apple','orange'];

// 특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits));
console.log(Array.isArray({}));

// 특정한 아이템의 위치를 찾을 때
console.log(fruits.indexOf('apple'));
// 내가 틀렸던 부분이다! console.log(fruits.indexOf([1])); 인덱스를 찾는건데 인덱스를 주면 뭘 찾으란 거니?


// 배열에 내가 찾는 값이 있는지 확인 할 때
console.log(fruits.includes('banana'));

// 추가 : 제일 뒤에 
fruits.push('cherry');
console.log(fruits);

// 추가 : 제일 앞에

fruits.unshift('watermelon');
console.log(fruits);


// 제거 : 제일 뒤에
fruits.pop();
console.log(fruits);

// 제거 : 제일 앞에
fruits.shift();
console.log(fruits);

// shift/unshift 는 제일 앞에 ele를 제거하거나 추가하여 기존의 배열을 하나씩 이동 시켜 새로운 배열을 만드므로
// 오래 걸린다.  

// < Splice >
// 중간에 추가 또는 삭제
// [1] 부터 시작해서 1개 삭제
fruits.splice(1,1);
console.log(fruits);

// [1] 부터 시작해서 아무것도 삭제하지 않고, 새로운 ele 추가
fruits.splice(1,0,'grape');
console.log(fruits);

// <Slice> 
// 잘라진 새로운 배열을 만듬, 배열이 바뀌는 것이 아님에 유의해라
// [0] 부터 2개의 ele 를 잘라서 새로운 배열로 리턴한다

let newArr=fruits.slice(0,2);
console.log(fruits);
console.log(newArr);

// 여러개의 배열을 붙여줌
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3);

// 순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4);
console.clear();

// 중첩 배열을 하나의 배열로 펼치기
let arr= [[1,2,3],[4,5,6]];
console.log(arr);
console.log(arr.flat());

let arrange= [[1,2,3],[4,5],6];
console.log(arrange);
console.log(arrange.flat(2));


// 특정한 값으로 배열을 채우기(배열 자체를 수정)
let arrange2= [1,2,3,4,5,6];
arrange2.fill(0,1,2);
console.log(arrange2);
arrange2.fill(0,1,3);
console.log(arrange2);
arrange2.fill('s', 0);
console.log(arrange2);

//배열을 문자열로 합하기

let text = arrange2.join();
console.log(text);

let text2 = arrange2.join(' | ');
console.log(text2);