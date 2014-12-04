/// <reference path="../constants.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/enemy.ts" />
/// <reference path="../objects/ammo.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/desert.ts" />
/// <reference path="../objects/tank.ts" />
/// <reference path="../objects/scoreboard.ts" />
/*
File: gameover.ts
Author: Emily Black
Website: webdesign4.georgianc.on.ca/~200261931/comp2068/SideScroller/index.html
Description: This is a tank side scroller game. 
Revision: 1
Last Changed By: Emily Black
Date Last Modified: November 13, 2014
*/
module states {
    export function gameOverState() {
        desert.update();
    }

    // restart Game when Try Again Button is clicked
    export function tryAgainClicked(event: MouseEvent) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }

    // game Over Scene
    export function gameOver() {
        var gameOverLabel: objects.Label;
        var finalScoreLabel: objects.Label;
        var finalScore: objects.Label;
        var finalLevelLabel: objects.Label;
        var finalLevel: objects.Label;
        var finalScoreInt;


        constants.GAME_LEVEL = 3;
        constants.TANK_LIVES = 3;
        constants.GAME_SCORE = 0;

        // declare new Game Container
        game = new createjs.Container();

        // snstantiate Game Objects
        desert = new objects.Desert(stage, game);

        // show Cursor
        stage.cursor = "default";

        // display Game Over
        gameOverLabel = new objects.Label(stage.canvas.width / 2, 20, "GAME OVER");
        game.addChild(gameOverLabel);

        // display Final Score Label
        finalScoreLabel = new objects.Label(stage.canvas.width / 2, 60, "FINAL SCORE");
        game.addChild(finalScoreLabel);
        // display Final Score
        finalScore = new objects.Label(stage.canvas.width / 2, 100, scoreboard.score.toString());
        game.addChild(finalScore);
        // display Final Score Label
        finalLevelLabel = new objects.Label(stage.canvas.width / 2, 140, "HIGHEST LEVEL");
        game.addChild(finalLevelLabel);
        // display Final Score
        finalLevel = new objects.Label(stage.canvas.width / 2, 180, scoreboard.level.toString());
        game.addChild(finalLevel);
        // display Try Again Button
        tryAgain = new objects.Button(stage.canvas.width / 2, 300, "tryAgainButton");
        game.addChild(tryAgain);
        tryAgain.addEventListener("click", tryAgainClicked);

        stage.addChild(game);


    }
}