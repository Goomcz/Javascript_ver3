// 증감 연산자 Increment Decrement Operators

let a = 0;

a = a + 1;
a++;

a = a - 1;
a--;

// 주의 사항! 증감 연산자를 뒤에 놓느냐 앞에 놓느냐에 따라 달라진다
/*

a++; -> 필요한 연산을 하고, 그 뒤 값을 증가 시킴
++a; -> 값을 먼저 증가 시키고, 필요한 연산을 함
*/

a =0;
console.log(a);
let b = a++; // 할당 연산을 먼저 한 후에, 값을 증가시킴
console.log(b); // 따라서, b에는 증가가 되기 전의 값인 0이 할당되어 있음
console.log(a);

let c = 0;
let d = ++c; // 이번에는 증가 연산을 먼저 한 후에 할당 연산을 진행했기 때문에 1 출력된다
console.log(d); 