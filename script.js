let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField")

let guessCount = 1;
let resetButton;

function checkGuess() {
    const userGuess = Number(guessField.value);

    if (guessCount === 1) {
        guesses.textContent = "Previous guesses:";
    }

    guesses.textContent = `${guesses.textContent} ${userGuess}`;

    if (userGuess === randomNumber) {
        lastResult.textContent = "); i didnt get to steal you money you win..."
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent = "";
        setGameOver();
    }
    else if (guessCount === 10) {
        lastResult.textContent = "!!!! HAHAHAHAHAHAHHAHAHA YOUR MONEY IS MINE YOU DUMB LOOSER LLLLL EZEZEZEZE L RATIO NOOB FATHERLESS CHILD!";
        lowOrHi.textContent = "";
        setGameOver();
    }
    else{
        lastResult.textContent = "Wrong!";
        lastResult.style.backgroundColor = "red";
        if (userGuess < randomNumber) {
            lowOrHi.textContent = "last guess was TOO LOOOOOOOOOOOOOOOOOOOOOOOOOOW NOOB"
        }
        else if (userGuess > randomNumber) {
            lowOrHi.textContent = "last guess was TOO HIIIIIIIIIIIIIIIIIIIGH JUST LIKE YOU"
        }
    }

    guessCount++;
    guessField.value = "";
    guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button")
    resetButton.textContent = "Loose more money???";
    document.appeand(resetButton)
    resetButton.addEventListener("click", resetGame)
}

function resetGame() {
    guessCount = 1;
    const resetParas = document.querySelectorAll(".resetParas p");

    for (const resetPara of resetParas) {
        resetPara.textContent = "";
    }
    
    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();
    lastResult.style.backgroundColor = "white";
    randomNumber = Math.floor(math.random() * 100) + 1;
}