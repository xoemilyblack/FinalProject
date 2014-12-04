/// <reference path="constants.ts" />
/// <reference path="managers/asset.ts" />
/// <reference path="objects/enemy.ts" />
/// <reference path="objects/ammo.ts" />
/// <reference path="objects/desert.ts" />
/// <reference path="objects/tank.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="objects/label.ts" />
/// <reference path="objects/button.ts" />
/// <reference path="managers/collision.ts" />
/// <reference path="states/play.ts" />
/// <reference path="states/level2.ts" />
/// <reference path="states/level3.ts" />
/// <reference path="states/menu.ts" />
/// <reference path="states/gameover.ts" />
/*
File: game.ts
Author: Emily Black
Website: webdesign4.georgianc.on.ca/~200261931/comp2068/SideScroller/index.html
Description: This is a tank side scroller game. 
Revision: 1
Last Changed By: Emily Black
Date Last Modified: November 13, 2014
*/

var stage: createjs.Stage;
var game: createjs.Container;

var desert: objects.Desert;
var tank: objects.Tank;
var ammo: objects.Ammo;
var enemies = []; // enemy array;
var scoreboard: objects.Scoreboard;

var collision: managers.Collision;

var tryAgain: objects.Button;
var playButton: objects.Button;
var instructions: objects.Button;

var currentState: number;
var currentStateFunction;

// preload function - Loads Assets and initializes game;
function preload(): void {
    managers.Assets.init();
    managers.Assets.loader.addEventListener("complete", init);
}

// init called after Assets have been loaded.
function init(): void {
    stage = new createjs.Stage(document.getElementById("canvas"));
    stage.enableMouseOver(30);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);
    optimizeForMobile();

    currentState = constants.MENU_STATE;
    changeState(currentState);
}

// add touch support for mobile devices
function optimizeForMobile() {
    if (createjs.Touch.isSupported()) {
        createjs.Touch.enable(stage);
    }
}

// game Loop
function gameLoop(event): void {
    currentStateFunction();
    if (collision != null) {
        if (collision.endCheck() != null) {
            if (collision.endCheck().currentFrame === 8) {
                collision.handleAnimationEnd();
            }
        }
    }
    stage.update();
}

function changeState(state: number): void {
    // launch Various "screens"
    switch (state) {
        case constants.MENU_STATE:
            // instantiate menu screen
            currentStateFunction = states.menuState;
            states.menu();
            break;

        case constants.PLAY_STATE:
            // instantiate play screen
            currentStateFunction = states.playState;
            states.play();
            break;

        case constants.LEVEL_2_STATE:
            // levels game up
            currentStateFunction = states.level2;
            states.level2play();
            break; case constants.GAME_LEVEL:
            
        case constants.LEVEL_3_STATE:
            // levels game up
            currentStateFunction = states.level3;
            states.level3play();
                break;

        case constants.GAME_OVER_STATE:
            currentStateFunction = states.gameOverState;
            // instantiate game over screen
            states.gameOver();
            break;

        
    }
}





