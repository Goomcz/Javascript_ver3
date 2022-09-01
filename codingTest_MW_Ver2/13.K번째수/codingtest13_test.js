let array =[1, 5, 2, 6, 3, 7, 4];
let commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];
var answer =[];

/*
1. array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
2. 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
3. 2에서 나온 배열의 3번째 숫자는 5입니다.
4. 
*/
for(let i=0; i<commands.length; i++){

    let arrayNew =array.slice(commands[i][0]-1,commands[i][1]);
        arrayNew.sort(function(a,b){
            return a-b;
        });
        answer.push(arrayNew[commands[i][2]-1]);

    }
    console.log(answer);