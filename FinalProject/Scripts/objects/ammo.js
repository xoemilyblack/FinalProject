﻿/// <reference path="../managers/asset.ts" />
/*
File: ammo.ts
Author: Emily Black
Website: webdesign4.georgianc.on.ca/~200261931/comp2068/SideScroller/index.html
Description: This is a tank side scroller game.
Revision: 1
Last Changed By: Emily Black
Date Last Modified: November 13, 2014
*/
var objects;
(function (objects) {
    // Island Class
    var Ammo = (function () {
        function Ammo(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("ammo"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();

            this.dx = 5;

            game.addChild(this.image);
        }
        Ammo.prototype.update = function () {
            this.image.x -= this.dx;
            if (this.image.x > this.stage.canvas.width + this.width) {
                this.reset();
            } else if (this.image.x <= 0) {
                this.reset();
            }
        };

        Ammo.prototype.reset = function () {
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.image.x = stage.canvas.width + this.width;
        };

        Ammo.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Ammo;
    })();
    objects.Ammo = Ammo;
})(objects || (objects = {}));
//# sourceMappingURL=ammo.js.map
