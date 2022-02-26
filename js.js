let computerGuess;
let userGuess = [];
let userGuessUpdate = document.getElementById("textOutput");
let userNumberUpdate = document.getElementById("inputBox");

const init = () => {
    computerGuess = Math.floor(Math.random() * 100);
    document.getElementById("newGameButton").style.display ="none";
    document.getElementById("gameArea").style.display ="none";
    console.log(computerGuess);

};
const newGameBegin = () =>{
    window.location.reload();
}

const startGame = () =>{
    document.getElementById("welcomeScreen").style.display ="none";
    document.getElementById("gameArea").style.display ="block";
};

//start new game
const startNewGame =() =>{
    document.getElementById("newGameButton").style.display ="inline";
    userNumberUpdate.setAttribute("disabled" , true);

};

     //main logic
const compareGuess =() => {
    const userNumber = Number(document.getElementById("inputBox").value);
    userGuess = [ ...userGuess, userNumber];
    document.getElementById("guesses").innerHTML = userGuess;
  
     // check the number
    if (userGuess.length < maxGuss){
    if (userNumber > computerGuess) {
        userGuessUpdate.innerHTML = " Your guess is high☝️";
        userNumberUpdate.value = "";
    }else if (userNumber < computerGuess){
        userGuessUpdate.innerHTML = " Your guess is low👇";
        userNumberUpdate.value = "";
    }else{
        userGuessUpdate.innerHTML = " it's Correct😄";
        userNumberUpdate.value = "";
        startNewGame();
    }
    }else{
        if (userNumber > computerGuess) {
            userGuessUpdate.innerHTML =  `You Loose!! correct number was😫 ${computerGuess}`;
            userNumberUpdate.value = "";
            startNewGame();
        }else if (userNumber < computerGuess){
            userGuessUpdate.innerHTML = `You Loose!! correct number was😫 ${computerGuess}`;
            userNumberUpdate.value = "";
            startNewGame();
        }else{
            userGuessUpdate.innerHTML = " it's Correct😄";
            userNumberUpdate.value = "";
            startNewGame();
        }
    }

    document.getElementById("attempts").innerHTML= userGuess.length;
  
};
const easyMode = () =>{
    maxGuss = 10;
    startGame();
}
const hardMode = () =>{
    maxGuss = 5;
    startGame();
}