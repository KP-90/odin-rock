let scoreDisplay = document.querySelector("#winlose");
let winDisplay = document.querySelector("#wins");
let loseDisplay = document.querySelector("#loses");
let tieDisplay = document.querySelector("#ties");
let compDisplay = document.querySelector("#compChoice");

let win = 0;
let lose = 0;
let tie = 0;

winDisplay.textContent = win;
loseDisplay.textContent = lose;
tieDisplay.textContent = tie;

const btns = document.querySelectorAll("button");
btns.forEach(btn => btn.addEventListener("click", function(e) {
    let choice = e.srcElement.id; //saves id of the button.
    game(choice);
}))

function computerPlay() {
    let items = Array("Rock", "Paper", "Scissors");
    let item = items[Math.floor(Math.random()*items.length)];
    return item;
}

function playRound(playerSelection, computerSelection) {
    let comp = computerSelection.toLowerCase();
    compDisplay.textContent = `Computer chose ${comp}`;
    if(playerSelection == 'rock') {
        if(comp == "rock") {
            tie += 1;
            return "It's a Tie";
        }
        else if(comp == 'paper') {
            lose += 1;
            return "You lose. Paper beats rock.";
        }
        else if(comp == 'scissors') {
            win += 1;
            return "You win!!! Rock beats scissors";
        }
    }
    if(playerSelection == 'paper') {
        if(comp == "rock") {
            win += 1;
            return "You win!!! Paper beats rock";
        }
        else if(comp == 'paper') {
            tie += 1;
            return "It's a tie";
        }
        else if(comp == 'scissors') {
            lose += 1;
            return "You lose. Scissors beats paper";
        }
    }
    if(playerSelection == 'scissors') {
        if(comp == "rock") {
            lose += 1;
            return "You lose. Rock beats scissors";
        }
        else if(comp == 'paper') {
            win += 1;
            return "You win!!! Scissors beats paper.";
        }
        else if(comp == 'scissors') {
            tie += 1;
            return "It's a tie.";
        }
    }
}

function game(choice) {
    
    let player = choice;
    let computer = computerPlay();
    scoreDisplay.textContent = playRound(player, computer);
    winDisplay.textContent = win;
    loseDisplay.textContent = lose;
    tieDisplay.textContent = tie;


}