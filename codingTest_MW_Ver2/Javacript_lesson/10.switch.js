// if 문과 비슷하지만 Switch는 조금 다름
// 정해진 범위 안의 값에 대해 특정한 일을 해야 하는 경우
// 예를 들면, 특정 일을 입력했을 때 요일 이름이 나오게 만든다면
// if를 쓰면 조건 7개를 만들어야 함
let day = 6; // 0: 월 1: 화 2: 수 ~~~
let dayName;
// 스위치를 쓰면 좀 더 깔끔하게 쓸 수 있다
switch(day){
    case 0 : 
    dayName = '월요일';
    break;
    case 1: 
    dayName = '화요일';
    break;
    case 2: 
    dayName = '수요일';
    break;
    case 3:
    dayName = '목요일';
    break;
    default: console.log('해당 요일 없음!'); // if문의 else처럼 처리할 수 없는 케이스를 default로 처리함
}

let condition = 'okay';
let text;
switch(condition){
    case 'okay':
    case 'good':
    text = '좋음!';
    break;
    case 'bad':
    text = '나쁨!';
    break;
    default : console.log('해당하는 condition 없음!');
}