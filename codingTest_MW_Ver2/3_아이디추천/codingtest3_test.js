let new_idArray = 'abcdefghijklmn.p';
// ..Minwoong_kim...@a.mat...com/%1..2.3..4-..../.....
console.log(new_idArray);

let new_idArrayStep1 = new_idArray.toLowerCase();
console.log(new_idArrayStep1); // Step1 소문자로 바꾸기

let reg= new RegExp(/[^0-9a-z-_.]/,'g');
let new_idArrayStep2 = new_idArrayStep1.replace(reg,''); //  Step2 가능한 문자/숫자 빼고 다 삭제한 배열
console.log(new_idArrayStep2);

let reg2= new RegExp(/[.]{2,}/,'g'); // Step 3 연속된 .(마침표)를 하나의 마침표로 replace
let new_idArrayStep3 = new_idArrayStep2.replace(reg2,'.');
console.log(new_idArrayStep3);

let new_idArrayStep3_1 = new_idArrayStep3.split('');
console.log(new_idArrayStep3_1); // Step 3-1 문자 배열 형태로 만들기

let new_idArrayStep3_1Index = new_idArrayStep3_1.length-1; // Step 3-1 만든 배열의 마지막 값의 index 나타내기
console.log(new_idArrayStep3_1Index);

// Step 4 처음 혹은 마지막 문자가 . 이면 삭제하기

if(new_idArrayStep3_1[0]=='.'){
    new_idArrayStep3_1.shift();
    new_idArrayStep3_1Index--;
}

console.log(new_idArrayStep3_1);
console.log(new_idArrayStep3_1Index);

if(new_idArrayStep3_1[new_idArrayStep3_1Index]=='.'){
    new_idArrayStep3_1.pop();
    new_idArrayStep3_1Index--;
}

console.log(new_idArrayStep3_1);
console.log(new_idArrayStep3_1Index);

// Step 5 문자열이 16자 이상이면 15자가 될 때까지 삭제하며, 마지막이 . 이면 또 삭제
// 주의 do..while은 test 조건이 거짓임이 판명될때까지 계속 실행된다


if(new_idArrayStep3_1Index >= 15){
    do{new_idArrayStep3_1.pop();
        new_idArrayStep3_1Index--;
    }while(new_idArrayStep3_1Index !=14);
}

if(new_idArrayStep3_1[new_idArrayStep3_1Index] == '.'){
    new_idArrayStep3_1.pop();
}
    console.log(new_idArrayStep3_1);

// 빈 문자가 되면 a 를 넣는다 / 2자 이하가 되면 3자리가 될 떄까지 마지막 문자를 반복한다 구현해야 함 
if(new_idArrayStep3_1.length == 0 ){
    do{new_idArrayStep3_1.push('a');
        new_idArrayStep3_1Index++;}
    while(new_idArrayStep3_1Index != 2);
} 
else if(new_idArrayStep3_1.length <= 2){
    do{new_idArrayStep3_1.push(new_idArrayStep3_1[new_idArrayStep3_1Index]);
        new_idArrayStep3_1Index++;}
    while(new_idArrayStep3_1Index != 2);
}

console.log(new_idArrayStep3_1);
console.log(new_idArrayStep3_1Index);


let recommendedID = new_idArrayStep3_1.join('');
console.log(recommendedID);