let array = ['rock', 'paper', 'scissors'];
function computerPlay() {   //generate random computer play
    let ans = Math.floor(Math.random() * 3);
    return(array[ans]);
}

function playRound(playerSelection, computerSelection) {    //takes player selection and evaluate result
    playerSelection = prompt('Please enter your selection: ').toLowerCase();
    if (!array.includes(playerSelection)) {
        alert('Your choice wasn\'t rock, paper, or scissors. Please choose again.');
        playerSelection = prompt('Please enter your selection: ').toLowerCase();
    }
    computerSelection = computerPlay();
    temp = playerSelection[0].toUpperCase() + playerSelection.slice(1, playerSelection.length);
    if (computerSelection == playerSelection) {
        return('Tie')
    } else if (playerSelection == array[3] && computerSelection == array[1] || array.indexOf(playerSelection) < array.indexOf(computerSelection)) {
        return(`You lost. ${temp} lose to ${computerSelection}`);
    } else if (playerSelection == array[1] && computerSelection == array[3] || array.indexOf(playerSelection) > array.indexOf(computerSelection)) {
        return(`You won. ${temp} win to ${computerSelection}`);
    }
}

function game() {   //looping main game 5 times and keeping scores
    let playerScore = 0;
    let computerScore = 0;
    while (playerScore < 5 && computerScore < 5) {
        let ans = playRound();
        console.log(ans);
        if (ans.includes('won')) {
            playerScore++;
        } else if (ans.includes('lost')) {
            computerScore++;
        }
    }

    console.log(`Final score: Player ${playerScore}-${computerScore} Computer`);
}

game();