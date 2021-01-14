'use strict'

const CARROT_SIZE = 80;
const CARROT_COUNT = 5;
const BUG_COUNT = 5;

const field = document.querySelector(".game_field");
const gameBtn = document.querySelector(".game_button");
const gameTimer = document.querySelector(".game_timer");
const gameScore = document.querySelector(".game_score");
const fieldRect = field.getBoundingClientRect();
const popUp = document.querySelector("pop-up pop-up--hide");

let started = false;
let score = 0;
let timer = undefined;

gameBtn.addEventListener("click", (e) => {
    if (started) {
        stopGame();
    } else {
        startGame();
    }
    started = !started;
});

function stopGame() {

}

function startGame() {
    initGame();
    showStopButton();
    showTimerAndScore();
    startGameTimer();
}

function startGameTimer() {
    let GAEM_TIME = 5;
    const x = setInterval(() => {
        gameTimer.innerHTML = `0:${GAEM_TIME}`
        GAEM_TIME -= 1

        if (GAEM_TIME < 0) {
            clearInterval(x);
            gameButton.style.visibility = 'hidden';
            //팝업 띄우기
        }
    }, 1000);
}

function showTimerAndScore() {
    gameTimer.style.visibility = 'visible';
    gameScore.style.visibility = 'visible';
}

function showStopButton() {
    const icon = gameBtn.querySelector('.fa-play')
    icon.classList.add('fa-stop');
    icon.classList.remove('fa-play');
}

function initGame() {
    field.innerHTML = '';
    gameScore.innerText = CARROT_COUNT;
    //벌레와 당근을 생성한뒤 field에 추가해줌
    addItem('carrot', CARROT_COUNT, 'img/carrot.png');
    addItem('bug', BUG_COUNT, 'img/bug.png');
}

function addItem(className, count, imgPath) {
    const x1 = 0
    const y1 = 0
    const x2 = fieldRect.width - CARROT_SIZE;
    const y2 = fieldRect.height - CARROT_SIZE;
    for (let i = 0; i < count; i++) {
        const item = document.createElement('img');
        item.setAttribute('class', className);
        item.setAttribute('src', imgPath);
        item.style.position = 'absolute';
        const x = randomNumber(x1, x2);
        const y = randomNumber(y1, y2);
        item.style.left = `${x}px`;
        item.style.top = `${y}px`;
        field.appendChild(item);
    }
}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

initGame()