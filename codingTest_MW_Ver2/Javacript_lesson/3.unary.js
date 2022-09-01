// 단항 연산자 Unary Operators

/* 
+ (양)
- (음)
! (부정)
*/

let a = 5;
a = -a; // -1 * 5 랑 같음
console.log(a);
console.log(-a);

a = +a;
console.log(+a);


let boolean = true;
console.log(boolean);
console.log(!boolean);
console.log(!!boolean);

// + 숫자가 아닌 타입들에 + 연산자를 사용하면 어떤값이 나올까
console.log(+false);
console.log(+null);
console.log(+'');
console.log(+true);
console.log(+'text');

console.log(!1); // 숫자에 부정연산자를 붙이면 false 가 됨
console.log(!!1); // 숫자에 부정연산자 두 번 붙이면 true 가 됨

