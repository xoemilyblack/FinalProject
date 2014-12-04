/// <reference path="../constants.ts" />
/// <reference path="../managers/asset.ts" />
/*
File: button.ts
Author: Emily Black
Website: webdesign4.georgianc.on.ca/~200261931/comp2068/SideScroller/index.html
Description: This is a tank side scroller game. 
Revision: 1
Last Changed By: Emily Black
Date Last Modified: November 10, 2014
*/
module objects {
    export class Button extends createjs.Sprite {
        constructor(x: number, y: number, buttonIDString: string) {
            super(managers.Assets.atlas, buttonIDString);
            this.regX = this.getBounds().width / 2;
            this.regY = this.getBounds().height / 2;
            this.x = x;
            this.y = y;
            this.setButtonListeners();
        }

        setButtonListeners() {
            this.cursor = 'pointer';
            this.on('rollover', this.onButtonOver);
            this.on('rollout', this.onButtonOut);
        }

        onButtonOver() {
            this.alpha = 0.8;
        }

        onButtonOut() {
            this.alpha = 1;
        }
    }
}