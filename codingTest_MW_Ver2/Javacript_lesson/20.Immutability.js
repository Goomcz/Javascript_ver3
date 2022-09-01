// 불변성 (Immutability)

function display(num){
    num =5;  // 함수 내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 좋지 않다
    console.log(num);
    return;
}

const value =4;
display(value); // 5 출력 : display 내의 지역 변수 num = 5니까 
console.log(value); // 4

// 상태 변경이 필요한 경우에는, 새로운 상태(오브젝트, 값) 을 만들어서 반환하는 것이 좋다
// 위의 경우는 값에 의한 복사(copy by value)라서 큰 문제는 안되지만

// 객체값의 경우 참조에 의한 복사(copy by reference)이기 때문에 메모리의 위치를 전달하기 때문에!
// 함수 내부에서 값을 변경하다가 아예 변수 내용이 바뀐다( 아래 참고 )

function displayObj(obj){
    obj.name = 'Bob';
    console.log(obj);
}

const minwoong = {name : 'Minwoong'};
displayObj(minwoong);
console.log(minwoong);

// 위의 경우 어떻게 되는 건지?
// 함수 내부에서 오브젝트 내부의 값이 바뀌면서, minwoong 변수에 할당된 object의 값도 바뀌게 된다
// 함수 내부에서, 외부로부터 전달된 인자(특히나, object)는 변경하면 안좋다
