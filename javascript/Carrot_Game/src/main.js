'use strict'
import PopUp from './popup.js';
import Game from './game.js';


const gameFinishBanner = new PopUp();
const game = new Game(3, 2, 2);
gameFinishBanner.setClickListener(() => {
    game.start();
})


game.setGameStopListener(reason => {
    console.log(reason)
    let message;
    switch (reason) {
        case 'cancel':
            message = 'Replay❓';
            break;
        case 'win':
            message = 'YOU WIN❤';
            break;
        case 'lose':
            message = 'YOU LOST💥';
            break;
        default:
            throw new Error('not valid reason');
    }
    gameFinishBanner.showWithText(message);
})