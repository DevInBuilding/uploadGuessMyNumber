'use strict';

let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highScore = 0;

const showMessage = message => document.querySelector('.message').textContent = message;
const changeBackgroundColor = color => document.querySelector('body').style.backgroundColor = color;
const showHideNumber = number => document.querySelector('.number').textContent = number;
const showScore = score => document.querySelector('.score').textContent = score;
const showHighscore = highScore => document.querySelector('.highscore').textContent = highScore;
const resetGuessInput = () => document.querySelector('.guess').value = ``;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    if(!guess){
        showMessage(`⛔ No number inserted!`);
    } else if(guess === secretNumber){
        changeBackgroundColor(`#60b347`);
        showHideNumber(secretNumber);
        showMessage(`🎉 Congrats, you win!`);
        if(score > highScore) { highScore = score; }
        showHighscore(highScore);
    } else if(guess !== secretNumber){
        if(score > 1){
            showMessage((guess > secretNumber) ? `⬆ Too high` : `⬇ Too low`);
            showScore(--score);
        } else {
            changeBackgroundColor(`#920000`);
            showMessage(`💥 We're sorry, but you lost!`);
            showScore(0);
        }
    }
});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1;
    
    resetGuessInput();
    showHideNumber(`?`);
    showMessage(`Start guessing...`);
    showScore(score);
    changeBackgroundColor(`#222`);
});