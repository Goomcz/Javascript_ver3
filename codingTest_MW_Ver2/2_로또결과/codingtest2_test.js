function solution(lottos, win_nums) {
    

    /* 배운 점?
    1. filter 함수 사용법 해당 배열에 접근하여 모든 element에 대해 동일한 조건을 가지는 element들만
    따로 뺴내서 새로운! 배열을 리턴해 준다
    2. incluldes 함수를 사용하여, 해당 배열에 내가 원하는 값이 있는지 없는지 확인 할 수 있다 
    3. let 선언 시, 값의 재할당은 가능하지만 변수 이름 중복 선언은 불가능 하다! 
    **/
    let winCounts = 0;
    let zeroArray = lottos.filter(number => number < 1);
    let zeroCounts = zeroArray.length;
    let maxRank;
    let minRank;

    for(let i = 0; i<win_nums.length; i++){
        if(lottos.includes(win_nums[i]) == true){
            winCounts+=1;}}

            if(winCounts == 0 && zeroCounts == 0){
                maxRank = 6;
                minRank = 6;
            } 
            else if(winCounts == 0){
                maxRank = 7-(winCounts+zeroCounts);
                minRank = 6-winCounts;
            }

            
            else{
                maxRank = 7-(winCounts+zeroCounts);
                minRank = 7-winCounts;
            }
        
    var answer = [maxRank,minRank];
    return answer;
}

//          let minRank = 7 - (wincounts);
//          let maxRank = 7 - (winCounts + zeroCounts);

// 3개 맞추고 0이 2개 불일치 1개
// min = 4 
// 6 = > 1
// 5 = > 2 
// 4 = > 3
// 3 = > 4
// 2 = > 5
// 1 = > 6
// 0 = > 6 