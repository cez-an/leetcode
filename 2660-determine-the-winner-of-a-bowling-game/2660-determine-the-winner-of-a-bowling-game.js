/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function(player1, player2) {

    let score1 = 0;
    let score2 = 0;

    for(let i=0; i<player1.length; i++){

        if(i === 0){
            score1+=player1[i];
            continue;
        }
        if(player1[i-1] === 10 || player1[i-2] === 10) score1+=(2*player1[i]);
        else score1+=player1[i]
    }
    for(let i=0; i<player2.length; i++){

        if(i === 0){
            score2+=player2[i];
            continue;
        }
        
        if(player2[i-1] === 10 || player2[i-2] === 10) score2+=(2*player2[i]);
        else score2+=player2[i];
    }
    
    if(score1>score2) return 1
    else if(score2>score1)return 2

    return 0
    
};