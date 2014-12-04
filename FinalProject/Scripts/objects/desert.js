/// <reference path="../managers/asset.ts" />
/*
File: desert.ts
Author: Emily Black
Website: webdesign4.georgianc.on.ca/~200261931/comp2068/SideScroller/index.html
Description: This is a tank side scroller game.
Revision: 1
Last Changed By: Emily Black
Date Last Modified: November 09, 2014
*/
var objects;
(function (objects) {
    // Ocean Class
    var Desert = (function () {
        function Desert(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("desert"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.reset();

            this.dx = 5;

            game.addChild(this.image);
        }
        Desert.prototype.update = function () {
            this.image.x -= this.dx;
            if (this.image.x <= -stage.canvas.width) {
                this.reset();
            }
        };

        Desert.prototype.reset = function () {
            this.image.x = 0;
        };

        Desert.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Desert;
    })();
    objects.Desert = Desert;
})(objects || (objects = {}));
//# sourceMappingURL=desert.js.map
