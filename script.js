'use strict';

// generating random number
let systemNumber =Math.trunc(Math.random()*20)+1;

// variable
let score=20;
let highscore=0;

// query selectors
const reloadButton = document.querySelector('.again');
const checkButton = document.querySelector('.check');
const userGuess=document.querySelector(".guess")
const display=document.querySelector('.message');
const number=document.querySelector(".number");
const body=document.querySelector('body');
const userHighScore=document.querySelector(".highscore");
const userScore=document.querySelector(".score");

// function
// display function
const displayHandler =function(message){
    // console.log('display function');

    display.textContent=message;
}

// event function
// check handler function
const checkHandler = ()=>{
    // console.log("check");
    const guessNumber=Number(userGuess.value);
    // console.log(guessNumber)

    // all possible cases
    // 1.when there is no input
    if(!guessNumber){
        displayHandler("No input found");
    }

    // 2.when player wins the game
    else if(guessNumber===systemNumber){
        displayHandler("You found out the Secret number");
        number.textContent=systemNumber;
        body.style.backgroundColor="#60b347";
        number.style.width="30rem";

        // setting highscore
        if(score>highscore){
            highscore=score;
            userHighScore.textContent=highscore;
        }
    }

    // 3.when input is worng
    else if(guessNumber!==systemNumber){
        if(score>1){
            if(guessNumber>systemNumber){
                displayHandler("Try to guess Smaller than this");
                score=score-1;
                userScore.textContent=score;
            }
            else{
                displayHandler("Try to guess Greater than this");
                score=score-1;
                userScore.textContent=score;
            }
        }
        // 4.when player loses the game
        else{
            displayHandler("oh.. You lost the game");
            userScore.textContent=0;
        }
    }
}

// reload handler function
const reloadHandler =()=>{
    // console.log("reload");

    score=20;
    systemNumber=Math.trunc(Math.random()*20)+1;

    displayHandler("Start guessing...");
    userScore.textContent=score;
    number.textContent="?";
    userGuess.value="";

    body.style.backgroundColor="#222";
    number.style.width="15rem";
}

// event handlers
// reload button
reloadButton.addEventListener('click', reloadHandler)

// check button
checkButton.addEventListener('click', checkHandler)
