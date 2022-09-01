function solution(numbers, hand) {
var answer = '';
let fixedFingerMap = new Map([[1,'L'],[4,'L'],[7,'L'],[3,'R'],[6,'R'],[9,'R']]);
let DistanceMap_2 = new Map([[1,1],[3,1],[5,1],[4,2],[6,2],[8,2],[7,3],[9,3],[0,3],[2,0],['*',4],['#',4]]);
let DistanceMap_5 = new Map([[2,1],[4,1],[6,1],[8,1],[1,2],[3,2],[7,2],[9,2],[0,2],[5,0],['*',3],['#',3]]);
let DistanceMap_8 = new Map([[5,1],[7,1],[9,1],[0,1],[2,2],[4,2],[6,2],[1,3],[3,3],[8,0],['*',2],['#',2]]);
let DistanceMap_0 = new Map([[8,1],[5,2],[7,2],[9,2],[2,3],[4,3],[6,3],[1,4],[3,4],[9,2],['*',1],['#',1]]);
let leftPos = '*';
let rightPos = '#';


for(let i=0; i<numbers.length; i++){

    if(fixedFingerMap.has(numbers[i]) == true)
    {
        answer += fixedFingerMap.get(numbers[i]);
        switch(fixedFingerMap.get(numbers[i]))
        {
            case 'L':
                leftPos = numbers[i];
                break;
            case 'R':
                rightPos = numbers[i];
                break;
        }
    }
    else
    {
        switch(numbers[i]){
        
            case 2 :

            if((DistanceMap_2.get(leftPos) - DistanceMap_2.get(rightPos)) > 0)
            {
            answer += 'R';
            rightPos = 2;
            }
            else if((DistanceMap_2.get(leftPos) - DistanceMap_2.get(rightPos)) < 0){
            answer += 'L';
            leftPos = 2;
            }

            else{
                switch(hand){
                    case 'left' : 
                    answer += 'L';
                    leftPos = 2;
                    break;
                
                    case 'right' :
                    answer += 'R';
                    rightPos = 2;
                    break;
                }
            }
            break;

            case 5 :

            if((DistanceMap_5.get(leftPos) - DistanceMap_5.get(rightPos)) > 0)
            {
            answer += 'R';
            rightPos = 5;
            }
            else if((DistanceMap_5.get(leftPos) - DistanceMap_5.get(rightPos)) < 0){
            answer += 'L';
            leftPos = 5;
            }

            else{
                switch(hand){
                    case 'left' : 
                    answer += 'L';
                    leftPos = 5;
                    break;
                
                    case 'right' :
                    answer += 'R';
                    rightPos = 5;
                    break;
                }
            }
            break;

            case 8 :

            if((DistanceMap_8.get(leftPos) - DistanceMap_8.get(rightPos)) > 0)
            {
            answer += 'R';
            rightPos = 8;
            }
            else if((DistanceMap_8.get(leftPos) - DistanceMap_8.get(rightPos)) < 0){
            answer += 'L';
            leftPos = 8;
            }

            else{
                switch(hand){
                    case 'left' : 
                    answer += 'L';
                    leftPos = 8;
                    break;
                
                    case 'right' :
                    answer += 'R';
                    rightPos = 8;
                    break;
                }
            }
            break;

            case 0 :

            if((DistanceMap_0.get(leftPos) - DistanceMap_0.get(rightPos)) > 0)
            {
            answer += 'R';
            rightPos = 0;
            }
            else if((DistanceMap_0.get(leftPos) - DistanceMap_0.get(rightPos)) < 0){
            answer += 'L';
            leftPos = 0;
            }

            else{
                switch(hand){
                    case 'left' : 
                    answer += 'L';
                    leftPos = 0;
                    break;
                
                    case 'right' :
                    answer += 'R';
                    rightPos = 0;
                    break;
                }
            }
        }
    }

}

return answer; 
}

    
console.log(solution([7,0,8,2,8,3,1,5,7,6,2],'left'));
//"LRLLRRLLLRR"

/*
7. L / L : 7번 / R : #
0. R / L : 7번 / R : 0번
8. L / L : 8번 / R : 0번
2. L / L : 5번(2) / R : 3번(3)
8. L / L : 8번(1) / R : 3번(3)
2. R / L : 8번(1) / R : 2번(3)
1. L / L : 1번(3) / R : 2번(3) 
4. L / L : 4번(2) / R : 2번(3)
*5. R / 
9. R
5. L
*/