const apple ={
    name : 'triangle',
    display: function(){
        console.log(`${this.name}: ▲`); 
// 객체 안에서 자기 자신의 속성에 접근할 때는 
//항상 this. 을 붙여줘야한다
// 앰퍼샌드 ` ` 는 문자열 이어붙여주기 위해 쓴것
    }
};

apple.display(); // apple 객체 내의 display라는 함수를 호출할 수 있다

