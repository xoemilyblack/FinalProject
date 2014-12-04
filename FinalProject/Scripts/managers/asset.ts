/*
File: asset.ts
Author: Emily Black
Website: webdesign4.georgianc.on.ca/~200261931/comp2068/SideScroller/index.html
Description: This is a tank side scroller game. 
Revision: 1
Last Changed By: Emily Black
Date Last Modified: November 13, 2014
*/
module managers {
    // Image and Sound Manifest;
    var assetManifest = [
        { id: "desert", src: "assets/images/desert.fw.png" },
        { id: "tank", src: "assets/images/tank.fw.png" },
        { id: "enemy", src: "assets/images/enemy.fw.png" },
        { id: "ammo", src: "assets/images/ammo.fw.png" },
        { id: "engine", src: "assets/sounds/tank_tracks.mp3" },
        { id: "thunder", src: "assets/sounds/explosion.mp3" },
        { id: "ammoPickup", src: "assets/sounds/reload.mp3" },
        { id: "soundtrack", src: "assets/sounds/soundtrack.mp3" }
    ];



    // SpriteSheet Data Object
    var spriteSheetData = {
        "images": ["assets/images/atlas.png"],
        "frames": [

            [112, 2, 130, 97],
            [2, 2, 108, 117],
            [364, 2, 114, 97],
            [592, 2, 106, 97],
            [244, 2, 118, 97],
            [480, 2, 110, 97],
            [700, 2, 102, 97],
            [804, 2, 94, 80],
            [900, 2, 82, 72],
            [1419, 2, 213, 67],
            [984, 2, 216, 68],
            [1202, 2, 215, 68]
        ],
        "animations": {
            "instructionsButton": [9],
            "playButton": [10],
            "tryAgainButton": [11],
            "explosion": {
                frames: [1, 0, 3, 4, 2, 5, 6, 7, 8],
                next: false,
                speed: 1
            },

        }
    }
  
    // Asset Manager Class
    export class Assets {
        public static manifest;
        public static data;

        public static loader;
        public static atlas: createjs.SpriteSheet;

        public static init() {
            createjs.Sound.initializeDefaultPlugins();
            createjs.Sound.alternateExtensions = ["mp3"];
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(assetManifest);
            this.atlas = new createjs.SpriteSheet(spriteSheetData);
        
        } 
    }
}