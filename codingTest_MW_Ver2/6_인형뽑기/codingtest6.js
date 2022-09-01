function solution(board, moves) {
    var answer = 0;
    let bucket = new Array();
    
for(let i=0; i<moves.length; i++){
    for(let j=0; j<board.length; j++){
    if(board[j][moves[i]-1] != 0) {
        bucket.push(board[j][moves[i]-1]);
        board[j][moves[i]-1] = 0;
        break;
    } 
    else{ 
        continue;
    }
    }
}





    return answer;
}

console.log(solution([[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]],
    [1, 5, 3, 5, 1, 2, 1, 4]));

/*
[[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]]

[[0,0,0,0,0],
[0,0,1,0,3],
[0,2,5,0,1],
[4,2,4,4,2],
[3,5,1,3,1]]

[0,0,0,0,0],
[0,0,1,0,3],
[0,2,5,0,1],
[4,2,4,4,2],
[3,5,1,3,1]]	[1,5,3,5,1,2,1,4]	4

[
*/