/* 
아이디 추천 프로그램
1. 모든 대문자를 소문자로
2. 소문자, 숫자, 뺴기 , 밑줄, 마침표를 뺸 나머지 삭제
3. . 이 두번 이상 반복이면 하나로 치환
4. . 이 처음이나 마지막에 오면 제거
5. 빈 문자열이 되면 a 대입
6. 16자 이상이 되면, 첫 15개 뺀 나머지 삭제
삭제 후 . 이 마지막이면 제거
7. 2자 이하가 되면 길이가 3될 때까지
마지막 문자 반복 대입 
//----------------------------------------------cleared
 나타날 수 있는 특수 문자 : -_.~!@#$%^&*()=+[{]}:?,<>/
*/

const new_id = '...!@BaT#*..y.abcdefghijklm';
function solution(new_id) {
    
    let new_idArrayStep1 = new_id.toLowerCase();
        
        let reg= new RegExp(/[^0-9a-z-_.]/,'g');
    let new_idArrayStep2 = new_idArrayStep1.replace(reg,'');
    
    
    
    
    
    var answer = '';
    return answer;
}