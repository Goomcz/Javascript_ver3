
const lottos = [0,0,33,45,15,26];
const win_nums = [1,2,3,4,5,6];
let lottosSum = lottos[0]+lottos[1]+lottos[2]+lottos[3]+lottos[4]+lottos[5];
let winCounts = 0;


    let zeroArray = lottos.filter(number => number < 1);
    let zeroCounts = zeroArray.length;

    for(let i = 0; i<win_nums.length; i++){

        if(lottos.includes(win_nums[i]) == true){
            winCounts+=1;}
        }

        
        if(winCounts <= 0){
            let minRank = 6 - winCounts;
            let maxRank = 6 - (winCounts + zeroCounts);
        }else{
            let minRank = 7 - winCounts;
            let maxRank = 7 - (winCounts + zeroCounts);
        }
            
            
            
            
            let answer = [maxRank,minRank];
            console.log(answer);

// max => 맞춘 개수 + zero 갯수에 맞는 등수
// min => 맞춘 개수에 맞는 등수


// 6개 맞추고 zero 0개  불일치 0개 => 1등 1등
// 5개 맞추고 zero 1개  불일치 0개 => 1등 2등
// 5개 맞추고 zero 0개  불일치 1개 => 2등 2등 
// 4 => 3
// 3 => 4
// 2 = > 5

// 1개 맞추고 zero 5개 불일치 0개  => 1등 6등
// 1개 맞추고 zero 4개 불일치 1개  => 2등 6등
// 1개 맞추고 zero 3개 불일치 2개  => 3등 6등
// 1개 맞추고 zero 2개 불일치 3개  => 4등 6등
// 1개 맞추고 zero 1개 불일치 4개  => 5등 6등
// 1개 맞추고 zero 0개 불일치 5개  => 6등 6등

// 0개 맞추고 zero 6개 불일치 0개  => 1등 6등
// 0개 맞추고 zero 5개 불일치 1개  => 2등 6등
// 0개 맞추고 zero 4개 불일치 2개  => 3등 6등
// 0개 맞추고 zero 3개 불일치 3개  => 4등 6등
// 0개 맞추고 zero 2개 불일치 4개  => 5등 6등
// 0개 맞추고 zero 1개 불일치 5개  => 6등 6등
// 0개 맞추고 zero 0개 불일치 6개  => 6등 6등

