/*// 오브젝트 배열의 가능한 형태들 
let countObj = {1 : 0, 2 : 0, 3 : 0};
let myObj = {'age':28, 'sex': 'male', 'height':180, 'weight':85};
// 오브젝트 배열의 배열 형태
let countObj2 = [{name : 1, count:0},{name : 2, count:0},{name : 3, count:0}];

console.log(Object.values(countObj));

// 오브젝트 배열 접근 방법(숫자 key 일 때)
countObj['1'] = 1;
// 오브젝트 배열 접근 방법(문자 key 일 때)
myObj.age=29;
myObj['sex'] = 'female';

console.log(Object.values(countObj)); // 오브젝트 배열에서 전체 values 추출
console.log(myObj['age']);

let countObj = {'1' : 0,'2' : 0,'3' : 0};
// Object.values(하고싶은 배열)에 일반 sort 메서드와 비교함수 적용
// 하면 value 값들만 정렬된다, 객체는 key로 접근하기 때문에 안될거 같은데 내가 원하는 기능 구현이
let newObjectArray = Object.values(countObj).sort(function(a,b){
    return a-b;
});
console.log(newObjectArray);
*/

let array = [1,2,3];
console.log(Math.max(...array));

