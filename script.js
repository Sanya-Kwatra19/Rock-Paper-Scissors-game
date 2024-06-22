const buttons=document.querySelectorAll('button');

const resultE1=document.getElementById('result');

const playerscoreE1=document.getElementById("user-score");
const computerscoreE1=document.getElementById("computer-score")

let playerscore=0;
let computerscore=0;

buttons.forEach(button=>{
    button.addEventListener('click',()=>{
        const result =playRound(button.id,computerPlay());
        resultE1.textContent=result;
     
    });
});


function computerPlay(){
    const choices=["rock","paper","scissors"];
    const randomChoice=Math.floor(Math.random()*choices.length);
    return choices[randomChoice];
}


function playRound(playerSelection,computerSelection){
    if (playerSelection===computerSelection){

        return "it's a tie";
    }else if (
        (playerSelection==="rock" && computerSelection==="scissors")||
        (playerSelection==="paper" && computerSelection==="rock")||
        (playerSelection==="scissors" && computerSelection==="paper")
    ) {
        playerscore++;
        playerscoreE1.textContent=playerscore;
        return " you win! "+ playerSelection + " beats "+ computerSelection;

    } else {
        computerscore++;
        computerscoreE1.textContent=computerscore;
        return " you lose! " + computerSelection + " beats " + playerSelection;
    }
}