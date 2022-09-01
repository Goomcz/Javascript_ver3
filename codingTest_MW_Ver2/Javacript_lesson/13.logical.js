// 논리 연산자
// && (And)
// || (Or)
// != (Not)
// !! Boolean 타입 변환

let num =20;
if(num >= 0 && num <9){
    console.log('good');
}

console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); //false
console.log(true || true); // true
console.log(true || false); // true
console.log(false || false); // false

console.log(!'text'); // 문자열은 기본적으로 true인데 !가 붙으니 false가 됨
console.log(!!'text'); // 문자열은 기본적으로 true인데 이중 부정이니 true가 됨, 즉 문자열을 boolean으로 바꾼 셈