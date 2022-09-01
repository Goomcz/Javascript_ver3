// 매개 변수(parameter)의 기본 값은 무조건 undefined

function add(a,b){
console.log(a);
console.log(b);
console.log(arguments);
return console.log(a+b);
}
add(1,2);


// 매개 변수 기본값 default parameters 할당 가능
function add2(a=1,b=2){
    console.log(a);
    console.log(b);
    console.log(arguments);
    return console.log(a+b);
    }
    add();

console.log('--------------------------');
// Rest Parameter
function sum(...numbers){ // 매개변수의 갯수가 전달될지 모를때, 모든 것들을 배열로 받을 때 씀
console.log(numbers);
}

sum(1,2,3,4,5,6);