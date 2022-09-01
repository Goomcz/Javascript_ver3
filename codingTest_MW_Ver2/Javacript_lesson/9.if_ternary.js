// if(조건1) else if(조건2) else(나머지)

let fruit = 'orange';
if(fruit =='apple'){
    console.log('false');
}
else if(fruit == 'orange'){
    console.log('true');
}
else{console.log('false');}

// 삼항 조건 연산자(Ternary Operator)

/*  조건식  ?  (참인경우 : 거짓인경우); 
로 표현하여 좀 더 깔끔한 if 문 전개가 가능하다*/

fruit == 'orange'? console.log('true') : console.log(false);

let emoji = fruit == 'orange' ? 'orange' : ' apple'; 
// 삼항 연산자 참인경우 할당하는 전개도 가능하다


// quiz

let num = 3;
// num의 숫자가 짝수 이면, good 홀수면 bad 출력하도록 삼항 연산자를 사용하여 만들어보자

if(num % 2 == 0){
console.log('good');
}else{ console.log('bad');}

num % 2 == 0 ? console.log('No odd') : console.log('odd');

