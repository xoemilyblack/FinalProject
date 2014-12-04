/// <reference path="../managers/asset.ts" />
/*
File: enemy.ts
Author: Emily Black
Website: webdesign4.georgianc.on.ca/~200261931/comp2068/SideScroller/index.html
Description: This is a tank side scroller game. 
Revision: 1
Last Changed By: Emily Black
Date Last Modified: November 13, 2014
*/
module objects {
    // Enemy class
    export class Enemy {
        image: createjs.Bitmap;
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        forward: number;
 

        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("enemy"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.forward = Math.floor((Math.random() * 10) + 6);
            this.reset();

            game.addChild(this.image);
        }

        update() {
         
            this.image.x -= this.forward;
            if (this.image.x <= -stage.canvas.width) {
                this.reset();
            }
        }

        reset() {
            this.image.x = stage.canvas.width + this.width;
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
          
        }

        destroy() {
            game.removeChild(this.image);
        }
    }

}