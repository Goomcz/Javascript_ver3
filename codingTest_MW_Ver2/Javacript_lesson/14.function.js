// Input -> Function -> Output

// function : 함수 정의 keyword
// add : 함수 name
// a,b : Parameter(함수 외부에서 받아오는 매개변수)
// return : 결과값 반환

function add(a,b){
    return a+b;
};

console.log(add(1,2));

// function도 함수의 내용 자체는 heap area에 할당이 된다.
// 다만, add 라는 함수의 이름은 해당 heap area의 주소만 할당이 될 뿐이다.
// call back function 개념 이해에 도움이 될 것임

/*let lastName = '김';
let firstName = '민웅';
let fullName = `${lastName} ${firstName}`; // templet literal : + 연산자를 활용하지 않아도 문자열 내부에 지정된 문자열 삽입 가능 
console.log(fullName);
*/

// 다른 사용자들도 있을 텐데, 그 때마다 위의 code를 계속 써?

function name(lastName,firstName){
    return `${lastName} ${firstName}`;
// const result = `${lastName} ${firstName}`;
// return result;
// 이렇게 써도 됨
}

let result = name('민웅','김'); // 취소선 : deprecated, 함수 이름으로 사용 권장하지 않음
console.log(result);