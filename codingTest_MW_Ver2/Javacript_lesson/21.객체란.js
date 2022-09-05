/*

객체란 서로 연관있는 속성과 행동을 묶어 주기 위해 사용한다

*/
//-------------------------------------------------------
// 1. 리터럴을 이용하여 객체를 만드는 방법
let object1 = {name:'Minwoong',height : 180, weight: 85, 
                'Hi':'안뇽', 0 : 1, ['hello']: '안녕'};
// => 객체 접근 방법
object1.name // dot nomination
object1.height
object1['name'] // bracket nomination
object1['hello']
console.log(object1['Hi']);
console.log(object1['0']); // 숫자 key 접근도 가능

// => 객체에 동적으로 접근하고 싶을 때 대괄호 표기법 사용!

// 1. getValue 함수 만들기
function getValue(object1,key){
    return object1[key]; // 코드가 실행되는 시점에 동적으로 key가 결정됨
}
console.log(getValue(object1, 'name'));

// 2. Add key&value 함수 만들기

function addKeyValue(object1,key,value){
    object1[key] = value;
}
addKeyValue(object1,'job','engineer');
console.log(object1);


//-----------------------------------------------------

// 2. new Object() 를 이용하여 객체를 만드는 방법


// 3. Object.creat(), 생성자 함수를 이용하여 객체를 만드는 방법
// 비슷한 오브젝트를 계속 생성해야 한다면 이용해보자!
function Fruit(name, emoji){ // 보통 생성자 함수는 대문자로 만드나?
    this.name = name;
    this.emoji = emoji;
    this.display = () => {
        console.log(`${this.name} : ${this.emoji}`);
    }
    return this; // 생략 가능!
}

const shape1 = new Fruit('star','★');

