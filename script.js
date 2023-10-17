const paperhand = "./assets/paper-hand.png";
const rockhand = "./assets/rock-hand.png";
const scissorhand = "./assets/scissors-hand.png";
const playerdiv = document.querySelector(".selectedimage");
const compdiv = document.querySelector(".compimage");
const scores = document.querySelector(".scores");
const result = document.querySelector(".results");
const res = document.querySelector(".res")
const symbols = document.querySelector(".symbols")

var playerchoice = "";
var computerchoice = "";
var playerscore = 0;
var computerscore = 0;
var gameEnded = false;

function updatescore() {
    scores.textContent = `${playerscore} - ${computerscore}`;
    
    if (playerscore >= 5 || computerscore >= 5) {
        result.style.visibility = "visible";
        symbols.style.visibility = "hidden"

        if (playerscore >= 5) {
            res.textContent = "You won the game";
        } else {
            res.textContent = "Computer won the game";
        }
        gameEnded = true;
    }
}

function display(e) {
    if (playerscore < 5 && computerscore < 5 && !gameEnded) {
        if (e == 1) {
            playerdiv.innerHTML = `<img src="${rockhand}" height="250px">`
            playerchoice = "rock"
            computer()
        } else if (e == 2) {
            playerdiv.innerHTML = `<img src="${paperhand}"  height="250px">`
            playerchoice = "paper"
            computer()
        } else {
            playerdiv.innerHTML = `<img src="${scissorhand}"  height="250px">`
            playerchoice = "scissor"
            computer()
        }
    }
}

function computer() {

        let random = Math.ceil(Math.random() * 3)

        if (random == 1) {
            compdiv.innerHTML = `<img src="${rockhand}" height="250px">`
            computerchoice = "rock"
            choicemaker()
        } else if (random == 2) {
            compdiv.innerHTML = `<img src="${paperhand}"  height="250px">`
            computerchoice = "paper"
            choicemaker()
        } else {
            compdiv.innerHTML = `<img src="${scissorhand}"  height="250px">`
            computerchoice = "scissor"
            choicemaker()
        }
    
}

function choicemaker() {

        if (playerchoice === computerchoice) playerchoice = playerchoice;

        else if (playerchoice == "rock" && computerchoice == "paper") computerscore += 1;
        else if (playerchoice == "scissor" && computerchoice == "rock") computerscore += 1;
        else if (playerchoice == "paper" && computerchoice == "scissor") computerscore += 1;
        else playerscore += 1;
    
        updatescore();
}
