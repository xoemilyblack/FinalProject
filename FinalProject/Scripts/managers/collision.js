/// <reference path="../objects/enemy.ts" />
/// <reference path="../objects/ammo.ts" />
/// <reference path="../managers/asset.ts" />
/// <reference path="../objects/tank.ts" />
/// <reference path="../objects/scoreboard.ts" />
/*
File: collision.ts
Author: Emily Black
Website: webdesign4.georgianc.on.ca/~200261931/comp2068/SideScroller/index.html
Description: This is a tank side scroller game.
Revision: 1
Last Changed By: Emily Black
Date Last Modified: November 13, 2014
*/
var managers;
(function (managers) {
    // collision Manager Class
    var Collision = (function () {
        function Collision(tank, ammo, enemies, scoreboard) {
            this.enemies = [];
            this.tank = tank;
            this.ammo = ammo;
            this.enemies = enemies;
            this.scoreboard = scoreboard;
        }
        // utility method - Distance calculation between two points
        Collision.prototype.distance = function (p1, p2) {
            var result = 0;
            var xPoints = 0;
            var yPoints = 0;

            xPoints = p2.x - p1.x;
            xPoints = xPoints * xPoints;

            yPoints = p2.y - p1.y;
            yPoints = yPoints * yPoints;

            result = Math.sqrt(xPoints + yPoints);

            return result;
        };

        // check collision between tank and any enemy object
        Collision.prototype.tankAndEnemy = function (enemy) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.tank.image.x;
            p1.y = this.tank.image.y;
            p2.x = enemy.image.x;
            p2.y = enemy.image.y;
            if (this.distance(p1, p2) < ((this.tank.height / 2) + (enemy.height / 2))) {
                createjs.Sound.play("thunder");
                this.animation = new createjs.Sprite(managers.Assets.atlas, "explosion");
                this.animation.x = enemy.image.x;
                this.animation.y = enemy.image.y;
                this.scoreboard.lives -= 1;
                constants.TANK_LIVES -= 1;
                enemy.reset();
                stage.addChild(this.animation);
                stage.update();
                this.animation.on("animationend", this.handleAnimationEnd);
            }
        };

        // check collision between tank and ammo
        Collision.prototype.tankAndAmmo = function () {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.tank.image.x;
            p1.y = this.tank.image.y;
            p2.x = this.ammo.image.x;
            p2.y = this.ammo.image.y;
            if (this.distance(p1, p2) < ((this.tank.height / 2) + (this.ammo.height / 2))) {
                createjs.Sound.play("ammoPickup");
                this.scoreboard.score += 100;
                constants.GAME_SCORE += 100;
                this.ammo.reset();
            }
        };

        // utility Function to Check Collisions
        Collision.prototype.update = function () {
            for (var count = 0; count < constants.ENEMY_NUM; count++) {
                this.tankAndEnemy(this.enemies[count]);
            }
            this.tankAndAmmo();
        };
        Collision.prototype.handleAnimationEnd = function () {
            stage.removeChild(this.animation);
        };
        Collision.prototype.endCheck = function () {
            return this.animation;
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map
