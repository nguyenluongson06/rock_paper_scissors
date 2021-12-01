let array = ['rock', 'paper', 'scissors'];
function computerPlay() {   //generate random computer play
    let ans = Math.floor(Math.random() * 3);
    return(array[ans]);
}

function playRound(playerSelection, computerSelection) {    //takes player selection and evaluate result
    if (computerSelection == playerSelection) {
        return('tie')
    } else if (playerSelection == array[3] && computerSelection == array[1] || array.indexOf(playerSelection) < array.indexOf(computerSelection)) {
        return('lost')
    } else if (playerSelection == array[1] && computerSelection == array[3] || array.indexOf(playerSelection) > array.indexOf(computerSelection)) {
        return('won')
    }
}
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('.btn');
const body = document.querySelector('body');
const div = document.createElement('div');

buttons.forEach(buttons => buttons.addEventListener('click',function()
{
  if (playerScore<5 && computerScore<5)
  {
    playerSelection = this.id;
    console.log(playerSelection);
    let ans = playRound(playerSelection,computerPlay());
    console.log(ans);
    if (ans.includes('won')) {
     playerScore++;
    } else if (ans.includes('lost')) {
      computerScore++;
    }
  }
  else {
    div.textContent = `Player ${playerScore}-${computerScore} Computer`;
    body.appendChild(div);
  }
}))

