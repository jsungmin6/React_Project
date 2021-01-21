'use strict'
import * as sound from './sound.js';
import Field from './field.js';

export default class Game {
    constructor(gameDuration, carrotCount, bugCount) {
        this.gameDuration = gameDuration;
        this.carrotCount = carrotCount;
        this.bugCount = bugCount;

        this.gameBtn = document.querySelector(".game_button");
        this.gameBtn.addEventListener("click", (e) => {
            if (this.started) {
                this.stop();
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
        this.gameBtn.addEventListener('click', () => {
            this.onClick && this.onClick();
        })
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

    stop() {
        this.started = false;
        this.stopGameTimer();
        this.hideGameButton();
        this.gameFinishBanner.showWithText('REPLAY?');
        sound.playAlert();
        sound.stopBackGround();
        this.onGameStop && this.onGameStop('cancel');
    }

    finish(win) {
        this.started = false;
        this.hideGameButton();
        if (win) {
            sound.playWin();
        } else {
            sound.playBug();
        }
        this.stopGameTimer();
        sound.stopBackGround();
        this.onGameStop && this.onGameStop(win ? 'win' : 'lose');
    }


    onItemClick = (item) => {
        if (!this.started) {
            return;
        }
        if (item === 'carrot') {
            this.score++;
            this.updateScoreBoard();
            if (this.score == this.carrotCount) {
                this.finish(true);
            }
        } else if (item === 'bug') {
            this.finish(false);
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
                this.finish(this.carrotCount == this.score)
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