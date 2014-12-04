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
var objects;
(function (objects) {
    // Enemy class
    var Enemy = (function () {
        function Enemy(stage, game) {
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
        Enemy.prototype.update = function () {
            this.image.x -= this.forward;
            if (this.image.x <= -stage.canvas.width) {
                this.reset();
            }
        };

        Enemy.prototype.reset = function () {
            this.image.x = stage.canvas.width + this.width;
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
        };

        Enemy.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Enemy;
    })();
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map
