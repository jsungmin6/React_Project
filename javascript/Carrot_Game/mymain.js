'use strict'

const CARROT_SIZE = 80;
const field = document.querySelector(".game_field");
const gameButton = document.querySelector(".game_button");
const gameTimer = document.querySelector(".game_timer");
const gameScore = document.querySelector(".game_score");
const fieldRect = field.getBoundingClientRect();
const popUp = document.querySelector("pop-up pop-up--hide");


gameButton.addEventListener("click", (e) => {
    initGame()
    timeDown()
});


function timeDown() {
    let time = 5
    const x = setInterval(() => {
        gameTimer.innerHTML = `0:${time}`
        time -= 1

        if (time < 0) {
            clearInterval(x);
            gameButton.style.display = "none";
            //팝업 띄우기
        }
    }, 1000);
}

function initGame() {
    //벌레와 당근을 생성한뒤 field에 추가해줌
    addItem('carrot', 5, 'img/carrot.png');
    addItem('bug', 5, 'img/bug.png');
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