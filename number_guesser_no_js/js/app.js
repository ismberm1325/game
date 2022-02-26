let countMin = 1,
    countMax = 10,
    win = getRandomNum(countMin, countMax),
    guessesLeft = 3;

const game = document.querySelector("#game"),
    minNum = document.querySelector(".min-num"),
    maxNum = document.querySelector(".max-num"),
    guessBtn = document.querySelector("#guess-btn"),
    guessInput = document.querySelector("#guess-input"),
    message = document.querySelector(".message");

minNum.textContent = countMin;
maxNum.textContent = countMax;

guessBtn.addEventListener("click", function () {
    let guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < countMin || guess > countMax) {
        setMessage(`The number should be from ${countMin} to ${countMax}`, "red");
    }

    if (guess === win) {
        gameOver(true, `Congrats! You win ${win}`);
    } else {
        guessesLeft -= 1;

        if (guessesLeft === 0) {
            gameOver(false, `Sorry, you failed! The number is ${win}`);
        } else {
            guessInput.style.border = "1px solid red";
            guessInput.value = "";
            setMessage(`${guess} - Wrong number! But you have left ${guessesLeft} attemps`, "red");
        }

    }
});


game.addEventListener("mousedown", function (e) {
    if (e.target.className === "play-again") {
        window.location.reload();
    }
});

function gameOver(won, msg) {
    let color;
    if (won === true) {
        (color = "green")
    } else {
        (color = "red");
    }

    guessInput.disabled = true;
    guessInput.style.border = `1px solid ${color}`;
    message.style.color = color;
    setMessage(msg);


    guessBtn.textContent = "Restart the game";
    guessBtn.className += "play-again";
}

function setMessage(msg, color) {
    message.textContent = msg;
    message.style.color = color;
}

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
