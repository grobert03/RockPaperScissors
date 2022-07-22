const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const table = document.querySelector('ol');
const winText = document.querySelector('#winner');
const pcPicked = document.querySelector('.pc-picked');

let playerWins = 0;
let pcWins = 0;

rockBtn.addEventListener('click', function() {
    let newLi = document.createElement('li');
    if (playRound('rock') == 'PLAYER') {
        
        newLi.textContent = 'PLAYER';
        playerWins++;
    } else if (playRound('rock') == 'PC') {
        
        newLi.textContent = 'PC';
        pcWins++;
    } else {
        
        newLi.textContent = 'DRAW';
    }
    table.appendChild(newLi);
    
    if (playerWins == 5) {
        winText.textContent = "PLAYER WINS!!!!";
        rockBtn.removeEventListener('click');
    } else if (pcWins == 5) {
        winText.textContent = "PC WINS!!!!";
        rockBtn.removeEventListener('click');
    }
});

paperBtn.addEventListener('click', function() {
    let newLi = document.createElement('li');
    if (playRound('paper') == 'PLAYER') {
        
        newLi.textContent = 'PLAYER';
        playerWins++;
    } else if (playRound('paper') == 'PC') {
      
        newLi.textContent = 'PC';
        pcWins++;
    } else {
       
        newLi.textContent = 'DRAW';
    }
    table.appendChild(newLi);
    if (playerWins == 5) {
        winText.textContent = "PLAYER WINS!!!!";
        paperBtn.removeEventListener;
    } else if (pcWins == 5) {
        winText.textContent = "PC WINS!!!!";
        paperBtn.removeEventListener;
    }
});

scissorsBtn.addEventListener('click', function() {
    let newLi = document.createElement('li');
    if (playRound('scissors') == 'PLAYER') {
        
        newLi.textContent = 'PLAYER';
        playerWins++;
    } else if (playRound('scissors') == 'PC') {
        
        newLi.textContent = 'PC';
        pcWins++;
    } else {
        
        newLi.textContent = 'DRAW';
    }
    table.appendChild(newLi);
    if (playerWins == 5) {
        winText.textContent = "PLAYER WINS!!!!";
        scissorsBtn.removeEventListener;
    } else if (pcWins == 5) {
        winText.textContent = "PC WINS!!!!";
        scissorsBtn.removeEventListener;
    }
});



function randomSelection() {
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum == 0) {
        pcPicked.textContent = "Computer picked: ROCK";
        return 'rock';
    } else if (randomNum == 1) {
        pcPicked.textContent = "Computer picked: PAPER";
        return 'paper';
    } else {
        pcPicked.textContent = "Computer picked: SCISSORS";
        return 'scissors';
    }
}

function playRound(playerSelection) {
    let computerSelection = randomSelection();
    
    if (playerSelection == computerSelection) {
        return 'DRAW';
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return 'PC';
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'PLAYER';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'PLAYER';
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return 'PC';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return 'PC';
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'PLAYER';
    }
}



