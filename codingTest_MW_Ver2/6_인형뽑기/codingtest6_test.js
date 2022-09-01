let board = [[0, 0, 0, 0, 0], 
             [0, 0, 1, 0, 3], 
             [0, 2, 5, 0, 1], 
             [4, 2, 4, 4, 2], 
             [3, 5, 1, 3, 1]];

let bucket = [];
let bucketNum = 0;
let moves = [1, 5, 3, 5, 1, 2, 1, 4];

for(let i=0; i<moves.length; i++){
    for(let j=0; j<board.length; j++){
    if(board[j][moves[i]-1] != 0) {
        bucket.push(board[j][moves[i]-1]);
        board[j][moves[i]-1] = 0;
        bucketNum++;
        break;
    } else{ 
        continue;
    }
    }
    if(bucketNum>1 && bucket[bucketNum-1]==bucket[bucketNum-2]){
        bucket.pop();
        bucket.pop();
        bucketNum-=2;
        
    } else{
        continue;
    }
}

console.log(bucket);

