let min, max, attempts, numberToGuess;

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame(level) {
    switch (level) {
        case 1:
            min = 1; max = 10; attempts = 6;
            break;
        case 2:
            min = 1; max = 50; attempts = 5;
            break;
        case 3:
            min = 1; max = 100; attempts = 4;
            break;
    }

    numberToGuess = getRandomNumber(min, max);
    document.getElementById("difficulty-selection").style.display = "none";
    document.getElementById("game-container").style.display = "block";
    document.getElementById("instructions").innerText = `Trouvez un nombre entre ${min} et ${max}`;
    
}

function checkGuess() {
    let attemptsleft=attempts;
    for(let i=0;i<attempts;i++){
        let userInput =Number(prompt("geuss the number:"));
        if (isNaN(userInput) || userInput < min || userInput > max) {
            attemptsleft--;
            alert( `Veuillez entrer un nombre entre ${min} et ${max}.`);
            alert(`Tentatives restantes : ${attemptsleft}`);
        }
        else  if (userInput === numberToGuess) {
            alert(`🎉 Bravo ! Vous avez trouvé ${numberToGuess} !`);
            endGame();
            return;
        }else {
            attemptsleft--;
            alert( userInput < numberToGuess ? "Trop bas !" : "Trop haut !");
            alert(`Tentatives restantes : ${attemptsleft}`);
        }
    }
   
    
    alert( `😢 Perdu ! Le bon nombre était ${numberToGuess}.`);
    endGame();
    
        
}

function endGame() {
    document.getElementById("restart-btn").style.display = "block";
    document.getElementById("checkGuess").style.display = "none";
}

function restartGame() {
    document.getElementById("game-container").style.display = "none";
    document.getElementById("difficulty-selection").style.display = "block";
    document.getElementById("restart-btn").style.display = "none";
    document.getElementById("checkGuess").style.display = "block";
}