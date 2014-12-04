/// <reference path="../objects/button.ts" />
/// <reference path="../objects/enemy.ts" />
/// <reference path="../objects/ammo.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/desert.ts" />
/// <reference path="../objects/tank.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../managers/collision.ts" />
/*
File: play.ts
Author: Emily Black
Website: webdesign4.georgianc.on.ca/~200261931/comp2068/SideScroller/index.html
Description: This is a tank side scroller game.
Revision: 1
Last Changed By: Emily Black
Date Last Modified: November 13, 2014
*/
var states;
(function (states) {
    var addLife = false;
    var levelUp = false;

    function level3(levelNum) {
        desert.update();
        ammo.update();
        tank.update();
        var level;
        level = levelNum;

        for (var count = 0; count < constants.ENEMY_NUM; count++) {
            enemies[count].update();
        }

        collision.update();
        scoreboard.update();

        if (scoreboard.lives <= 0) {
            stage.removeChild(game);
            tank.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }
    }
    states.level3 = level3;

    // play state Function
    function level3play() {
        // declare new Game Container
        game = new createjs.Container();

        // instantiate Game Objects
        desert = new objects.Desert(stage, game);
        ammo = new objects.Ammo(stage, game);
        tank = new objects.Tank(stage, game);

        // show Cursor
        stage.cursor = "none";

        for (var count = 0; count < constants.ENEMY_NUM; count++) {
            enemies[count] = new objects.Enemy(stage, game);
        }

        // display Scoreboard
        scoreboard = new objects.Scoreboard(stage, game);

        // instantiate Collision Manager
        collision = new managers.Collision(tank, ammo, enemies, scoreboard);

        stage.addChild(game);
    }
    states.level3play = level3play;
})(states || (states = {}));
//# sourceMappingURL=level3.js.map
