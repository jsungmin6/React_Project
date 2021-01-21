'use strict'
import * as sound from './sound.js';
import Field from './field.js';

export const Reason = Object.freeze({
    win: 'win',
    lose: 'lose',
    cancel: 'cancel',
})


export class GameBuilder {
    gameDuration(duration) {
        this.gameDuration = duration;
        return this;
    }

    carrotCount(num) {
        this.carrotCount = num;
        return this;
    }

    bugCount(num) {
        this.bugCount = num;
        return this;
    }

    build() {
        return new Game(
            this.gameDuration,
            this.carrotCount,
            this.bugCount
        );
    }
}


class Game {
    constructor(gameDuration, carrotCount, bugCount) {
        this.gameDuration = gameDuration;
        this.carrotCount = carrotCount;
        this.bugCount = bugCount;

        this.gameBtn = document.querySelector(".game_button");
        this.gameBtn.addEventListener("click", (e) => {
            if (this.started) {
                this.stop(Reason.cancel);
            } else {
                this.start();
            }
        });
        this.gameTimer = document.querySelector(".game_timer");
        this.gameScore = document.querySelector(".game_score");
        this.started = false;
        this.score = 0;
        this.timer = undefined;
        this.gameField = new Field(carrotCount, bugCount);
        this.gameField.setClickListener(this.onItemClick);
    }

    setGameStopListener(onGameStop) {
        this.onGameStop = onGameStop
    }

    start() {
        this.started = true;
        this.initGame();
        this.showStopButton();
        this.showTimerAndScore();
        this.startGameTimer();
        sound.playBackGround();
    }

    stop(reason) {
        this.started = false;
        this.stopGameTimer();
        this.hideGameButton();
        sound.playAlert();
        sound.stopBackGround();

        this.onGameStop && this.onGameStop(reason);
    }

    onItemClick = (item) => {
        if (!this.started) {
            return;
        }
        if (item === 'carrot') {
            this.score++;
            this.updateScoreBoard();
            if (this.score == this.carrotCount) {
                this.stop(Reason.win);
            }
        } else if (item === 'bug') {
            this.stop(Reason.lose);
        }
    }



    hideGameButton() {
        this.gameBtn.style.visibility = 'hidden';
    }

    startGameTimer() {
        let remainingTimeSec = this.gameDuration;
        this.updateTimerText(remainingTimeSec)
        this.timer = setInterval(() => {
            if (remainingTimeSec <= 0) {
                clearInterval(this.timer);
                this.stop(this.carrotCount == this.score ? Reason.win : Reason.lose)
                return
            }
            this.updateTimerText(--remainingTimeSec);
        }, 1000);
    }

    stopGameTimer() {
        clearInterval(this.timer)
    }

    updateScoreBoard() {
        this.gameScore.innerText = this.carrotCount - this.score;
    }



    updateTimerText(time) {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        this.gameTimer.innerText = `${minutes}:${seconds}`;
    }


    showTimerAndScore() {
        this.gameTimer.style.visibility = 'visible';
        this.gameScore.style.visibility = 'visible';
    }

    showStopButton() {
        const icon = this.gameBtn.querySelector('.fas')
        icon.classList.add('fa-stop');
        icon.classList.remove('fa-play');
        this.gameBtn.style.visibility = 'visible';
    }

    initGame() {
        this.score = 0;
        this.gameScore.innerText = this.carrotCount;
        this.gameField.init();
    }
}