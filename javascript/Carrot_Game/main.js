'use strict'

//리버튼 눌렀을 때
//당근 눌렀을 때
//벌레 눌렀을 때
//

const CARROT_SIZE = 80;
const CARROT_COUNT = 5;
const BUG_COUNT = 5;
const GAME_DURATION_SEC = 5
const field = document.querySelector(".game_field");
const gameBtn = document.querySelector(".game_button");
const gameTimer = document.querySelector(".game_timer");
const gameScore = document.querySelector(".game_score");
const fieldRect = field.getBoundingClientRect();
const popUp = document.querySelector(".pop-up");
const popUpText = document.querySelector(".pop_up__message");
const popUpRefresh = document.querySelector(".pop_up__refresh");

let started = false;
let score = 0;
let timer = undefined;


field.addEventListener('click', onFieldClick)

gameBtn.addEventListener("click", (e) => {
    if (started) {
        stopGame();
    } else {
        startGame();
    }
    started = !started;
});

function stopGame() {
    stopGameTimer();
    hideGameButton();
    showPopUpWithText('REPLAY?');
}

function showPopUpWithText(text) {
    popUpText.innerText = text
    popUp.classList.remove('pop-up--hide')
}

function stopGameTimer() {
    clearInterval(timer)
}

function hideGameButton() {
    gameBtn.style.visibility = 'hidden';
}

function startGame() {
    initGame();
    showStopButton();
    showTimerAndScore();
    startGameTimer();
}

function startGameTimer() {
    let remainingTimeSec = GAME_DURATION_SEC;
    updateTimerText(remainingTimeSec)
    timer = setInterval(() => {
        if (remainingTimeSec <= 0) {
            clearInterval(timer);
            return
        }
        updateTimerText(--remainingTimeSec);
    }, 1000);
}
function updateTimerText(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    gameTimer.innerText = `${minutes}:${seconds}`;
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