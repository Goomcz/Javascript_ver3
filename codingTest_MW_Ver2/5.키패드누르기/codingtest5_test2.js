// Math.ceil method : 주어진 값보다 크거나 같은 '정수(integer)' 중 가장 작은 것을 반환
// ex) Math.ceil(1.2) => 2 
// Math.sqrt method : 제곱근 구하기
// **2 연산자 : 2 제곱

function solution(numbers, hand) {
    var answer = '';
    let leftPos = '*';
    let rightPos = '#';
    let keyMap = new Map([['*',[0,0]],[7,[0,1]],[4,[0,2]],[1,[0,3]],[0,[1,0]],[8,[1,1]],[5,[1,2]],
    [2,[1,3]],['#',[2,0]],[9,[2,1]],[6,[2,2]],[3,[2,3]]]);
    let fixedFingerMap = new Map([[1,'L'],[4,'L'],[7,'L'],[3,'R'],[6,'R'],[9,'R']]);


    for(let i=0; i<numbers.length; i++){

        if(fixedFingerMap.has(numbers[i]) == true){
            switch(fixedFingerMap.get(numbers[i])){
                case 'L':
                answer += 'L';    
                leftPos = numbers[i];
                    break;
                
                case 'R':
                rightPos = numbers[i];
                answer += 'R';
                    break;
                }
            }
            

        else{ 
            let leftDistance =  Math.ceil(Math.sqrt(((keyMap.get(numbers[i]))[0] - (keyMap.get(leftPos))[0])**2 +
                                ((keyMap.get(numbers[i]))[1] - (keyMap.get(leftPos))[1])**2));
            let rightDistance = Math.ceil(Math.sqrt(((keyMap.get(numbers[i]))[0] - (keyMap.get(rightPos))[0])**2 +
                                ((keyMap.get(numbers[i]))[1] - (keyMap.get(rightPos))[1])**2));
    
        if(leftDistance > rightDistance){
            rightPos = numbers[i];
            answer += 'R';
        } else if(leftDistance < rightDistance){
            leftPos = numbers[i];
            answer += 'L';
        } else{
            switch(hand){
                case 'right':
                    answer+= 'R';
                    rightPos = numbers[i];
                    break;
                case 'left':
                    answer += 'L';
                    leftPos = numbers[i]; 
                    break;
            }
        }

        }

    }
    return answer; 
    }
    
        
    console.log(solution([1, 4, 7, 3, 6, 9, 0, 8, 5, 2, 2],'left'));
    //"LRLLRRLLLRR"
    
