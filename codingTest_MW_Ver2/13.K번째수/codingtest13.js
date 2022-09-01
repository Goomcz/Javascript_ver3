let array =[1, 5, 2, 6, 3, 7, 4];

// [5, 6, 3]
// i=2 j=5 k=3
/*
array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
2에서 나온 배열의 3번째 숫자는 5입니다.
*/

    let arrayNew = array.sort(function(a,b){
            return a-b;
        });
        
console.log(arrayNew);

