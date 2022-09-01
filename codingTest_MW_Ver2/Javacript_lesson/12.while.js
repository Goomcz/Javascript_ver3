// while(조건) {}
// 조건이 false 가 될때까지 {} 를 반복 실행

let num =5;
while(num >=0){
    console.log(num);
    num--;
}

let isActive = true;
let i=0;
while(isActive){
    console.log('Alive!');
    if(i ==10){
        break; // loop 문 빠져나올 수 있음, continue도 사용가능하다(이번 순간에만 skip하고 다음 코드로 넘어갈 때)
    }
    i++;
}


// do while{조건}
// 일반 while과는 다르게 일단 먼저 실행하고 나서, 조건을 검사한다

