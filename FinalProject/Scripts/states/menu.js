/// <reference path="../constants.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/tank.ts" />
/// <reference path="../objects/desert.ts" />
/// <reference path="../objects/ammo.ts" />
/// <reference path="../objects/enemy.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
/*
File: menu.ts
Author: Emily Black
Website: webdesign4.georgianc.on.ca/~200261931/comp2068/SideScroller/index.html
Description: This is a tank side scroller game.
Revision: 1
Last Changed By: Emily Black
Date Last Modified: November 13, 2014
*/
var states;
(function (states) {
    function playButtonClicked(event) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }
    states.playButtonClicked = playButtonClicked;

    function instructionsButtonClicked(event) {
        var instructionsLabel;
        game.removeAllChildren();
        desert = new objects.Desert(stage, game);
        var message = new createjs.Text("", "bold 20px Segoe UI", "#ffffff");
        message.text = "Use the mouse to control your tank around the screen." + " Dodge the oncoming enemy tanks and pick up ammo to get points." + " Reach a score of 1500 points and gain an extra life!";
        message.x = stage.canvas.width / 2;
        message.y = 130;
        message.textAlign = "center";
        message.lineWidth = this.canvas.width * .5;
        playButton = new objects.Button(stage.canvas.width / 2, 300, "playButton");
        playButton.addEventListener("click", playButtonClicked);
        instructionsLabel = new objects.Label(stage.canvas.width / 2, 30, "INSTRUCTIONS");
        game.addChild(instructionsLabel);
        game.addChild(message);
        game.addChild(playButton);
        stage.update();
    }
    states.instructionsButtonClicked = instructionsButtonClicked;

    function menuState() {
        desert.update();
    }
    states.menuState = menuState;

    function menu() {
        createjs.Sound.play("soundtrack", { loop: 3 });

        var gameNameLabel;

        // declare new Game Container
        game = new createjs.Container();

        // instantiate Game Objects
        desert = new objects.Desert(stage, game);

        // show Cursor
        stage.cursor = "default";

        // display Game Over
        gameNameLabel = new objects.Label(stage.canvas.width / 2, 40, "TANK WARS");
        game.addChild(gameNameLabel);

        // display Play Again Button
        playButton = new objects.Button(stage.canvas.width / 2, 300, "playButton");
        instructions = new objects.Button(stage.canvas.width / 2, 200, "instructionsButton");
        game.addChild(playButton, instructions);
        playButton.addEventListener("click", playButtonClicked);
        instructions.addEventListener("click", instructionsButtonClicked);

        stage.addChild(game);
    }
    states.menu = menu;
})(states || (states = {}));
//# sourceMappingURL=menu.js.map
