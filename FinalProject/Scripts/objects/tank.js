/// <reference path="../managers/asset.ts" />
/*
File: tank.ts
Author: Emily Black
Website: webdesign4.georgianc.on.ca/~200261931/comp2068/SideScroller/index.html
Description: This is a tank side scroller game.
Revision: 1
Last Changed By: Emily Black
Date Last Modified: November 13, 2014
*/
var objects;
(function (objects) {
    // Tank Class
    var Tank = (function () {
        function Tank(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("tank"));
            this.image.x = 40;
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            game.addChild(this.image);
            this.engineSound = createjs.Sound.play('engine', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 0.3, 0);
        }
        Tank.prototype.update = function () {
            this.image.y = this.stage.mouseY;
            this.image.x = this.stage.mouseX;
        };
        Tank.prototype.destroy = function () {
            this.engineSound.stop();
            game.removeChild(this.image);
        };
        return Tank;
    })();
    objects.Tank = Tank;
})(objects || (objects = {}));
//# sourceMappingURL=tank.js.map
