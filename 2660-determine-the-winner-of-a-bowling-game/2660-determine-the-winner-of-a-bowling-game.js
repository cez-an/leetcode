/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function(player1, player2) { 
    function findSum(arr){
        let score = 0
        for(let i=0; i<arr.length; i++){
        if(arr[i-1] === 10 || arr[i-2] === 10) score+=(2*arr[i]);
        else score+=arr[i]
        }
        return score;
    }
    let score1 = findSum(player1);
    let score2 = findSum(player2);
    if(score1>score2) return 1
    else if(score2>score1)return 2
    return 0    
};