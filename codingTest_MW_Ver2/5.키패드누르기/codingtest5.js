function solution(numbers, hand) {
    var answer = '';
    let fingerMap = new Map([[1,'L'],[4,'L'],[7,'L'],[3,'R'],[6,'R'],[9,'R']]);
    let leftDistanceMap = new Map([[1,3],[4,2],[7,1]]);
    let rightDistanceMap = new Map([[3,3],[6,2],[9,1]]);
    let midDistanceMap = new Map([[2,3],[5,2],[8,1],[0,1]]);
    let leftPos = 0;
    let rightPos = 0;
    
    for(let i=0; i<numbers.length; i++){
        if(fingerMap.has(numbers[i])==true){
        answer += fingerMap.get(numbers[i]);
    
        switch(fingerMap.get(numbers[i])){
            case 'L':
                leftPos = leftDistanceMap.get(numbers[i]);
                break;
            case 'R':
                rightPos = rightDistanceMap.get(numbers[i]);
                break;
            }
        } 
        
        else if(leftPos == rightPos){
            switch(hand){
                case 'left':
                    answer += 'L';
                    leftPos = leftDistanceMap.get(numbers[i]);
                    break;
                case 'right':
                    answer += 'R';
                    rightPos = rightDistanceMap.get(numbers[i]);
                    break;
                }
            }
    
        else if(leftPos > rightPos){
            answer += 'R';
            rightPos = rightDistanceMap.get(numbers[i]);
        }   
        
        else{
            answer += 'L';
            leftPos = leftDistanceMap.get(numbers[i]);
        }
    }
    // function 내용 끝
        return answer;
    }
    
        
        console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5],'right'));
    //"LRLLLRLLRRL"
    
    /*
    1. L / L : 1번(3) / R : 0
    3. R / L : 1번(3) / R : 3번(3)
    4. L / L : 4번(2) / R : 3번(3)
    5. L / L : 5번(2) / R : 3번(3)
    8. L / L : 8번(1) / R : 3번(3)
    2. 
    
    */