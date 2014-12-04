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
module managers {
    // collision Manager Class
    export class Collision {
        // class variables
        private tank: objects.Tank;
        private ammo: objects.Ammo;
        private enemies = [];
        private scoreboard: objects.Scoreboard;
        private animation: createjs.Sprite;

        constructor(tank: objects.Tank, ammo: objects.Ammo, enemies, scoreboard: objects.Scoreboard) {
            this.tank = tank;
            this.ammo = ammo;
            this.enemies = enemies;
            this.scoreboard = scoreboard;
        }

        // utility method - Distance calculation between two points
        private distance(p1: createjs.Point, p2: createjs.Point): number {
            var result: number = 0;
            var xPoints: number = 0;
            var yPoints: number = 0;

            xPoints = p2.x - p1.x;
            xPoints = xPoints * xPoints;

            yPoints = p2.y - p1.y;
            yPoints = yPoints * yPoints;

            result = Math.sqrt(xPoints + yPoints);

            return result;
        }

        // check collision between tank and any enemy object
        private tankAndEnemy(enemy: objects.Enemy) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
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
        }

        // check collision between tank and ammo
        private tankAndAmmo() {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
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
        }

        // utility Function to Check Collisions
        update() {
            for (var count = 0; count < constants.ENEMY_NUM; count++) {
                this.tankAndEnemy(this.enemies[count]);
            }
            this.tankAndAmmo();
        }
        handleAnimationEnd() {
            stage.removeChild(this.animation);
        }
        public endCheck(): any {
            return this.animation;
        }
    }


} 