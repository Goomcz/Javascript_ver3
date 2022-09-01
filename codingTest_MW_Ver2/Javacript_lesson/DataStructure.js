// 배열 생성 방법

let array = new Array(3);
console.log(array);

let array2 = new Array(1,2,3);
console.log(array2);

let arr = Array.of(1,2);
console.log(arr);

const anotherArray = [1,2,3,4];
console.log(anotherArray);

const anotherArray2 = Array.from(anotherArray);
console.log(anotherArray2);

const anotherArray3 = Array.from(anotherArray).fill(0);
console.log(anotherArray3);



