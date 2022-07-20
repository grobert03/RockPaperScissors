const picks = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    let index = getRandomInt();

    if (index == 0) {
        return picks[0];
    } else if (index == 1) {
        return picks[1];
    } else {
        return picks[2];
    }
}

function getRandomInt() {
    return Math.floor(Math.random() * 3);
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

    if (picks.indexOf(playerSelection) == picks.indexOf(computerSelection)) {
        return 'Draw!';
    } else if (picks.indexOf(playerSelection) > picks.indexOf(computerSelection)) {
        return 'Player Wins!';
    } else {
        return 'Computer Wins!';
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let pSelection = prompt('Your pick: ');
        console.log(playRound(pSelection, getComputerChoice()));
    }
}

