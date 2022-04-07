let userScore = 0;
let compScore = 0;
const userScoreElen = document.getElementById("user-score");
const compScoreElen = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");


function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    return choices[Math.floor(Math.random()*3)]
}
console.log(getComputerChoice())

function convert(letter) {
    if (letter === "r") return "Rock";
    else if (letter === "p") return "Paper";
    else if (letter === "s") return "Scissors";
}


function win(userChoice, computerChoice) {
    userScore++;
    userChoice_div =  document.getElementById(userChoice);
    userScoreElen.innerHTML = userScore;
    compScoreElen.innerHTML = compScore;
    result_div.innerHTML = convert(userChoice) + " beats computers " + convert(computerChoice) + ". You win!" ;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300)
}

function lose(userChoice, computerChoice) {
    compScore++;
    userChoice_div =  document.getElementById(userChoice);
    userScoreElen.innerHTML = userScore;
    compScoreElen.innerHTML = compScore;
    result_div.innerHTML = convert(userChoice) + " loses to computers " + convert(computerChoice) + ". You lose!" ;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300)
}

function draw(user, computer) {
    userChoice_div =  document.getElementById(userChoice);
    result_div.innerHTML = "The computer chose " + convert(computerChoice) + " as well. Choose again!" ;
    userChoice_div.classList.add('grey-glow');
    setTimeout(() => userChoice_div.classList.remove('grey-glow'), 300)
}





function game(userChoice) {
    const compChoice = getComputerChoice();
    switch (userChoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,compChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,compChoice)
            break;
        case "rr":
        case "pp":
        case "ss":
            draw();
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })

    paper_div.addEventListener('click', function() {
        game("p");
    })

    scissor_div.addEventListener('click', function() {
        game("s")
    })

}

main();